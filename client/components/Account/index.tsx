import React, { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import {Database} from '../../utils/database.types'
type Profiles = Database['public']['Tables']['profiles']['Row']
import styles from './Account.module.css'
import Image from "next/image";

const Account = ({session} : {session : Session}) => {
  const supabase = useSupabaseClient<Database>()
  const user = useUser();
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState<Profiles['username']>(null);
  const [firstName, setFirstName] = useState<Profiles['full_name']>(null);
  const [website, setWebsite] = useState<Profiles['website']>(null)
  const [avatar_url, setAvatarUrl] = useState<Profiles['avatar_url']>("")

  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)
      if (!user) throw new Error('No user')

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, full_name, avatar_url`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
        setFirstName(data.full_name ? data.full_name.split(' ')[0] : "User")
      }
    } catch (error) {
      alert('Error loading user data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({
    username,
    website,
    avatar_url,
  }: {
    username: Profiles['username']
    website: Profiles['website']
    avatar_url: Profiles['avatar_url']
  }) {
    try {
      setLoading(true)
      if (!user) throw new Error('No user')

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      }

      let { error } = await supabase.from('profiles').upsert(updates)
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  async function signout() {
    const { error } = await supabase.auth.signOut()
  }

  return (
    <div className={styles.accountContainer}>
      <div className={styles.account}>
        <div className={styles.userWelcome}>
          <div className={styles.userAvatar}>
            <Image src={avatar_url} alt="User avatar" height={75} width={75} />
          </div>
          <h1>Hello {firstName}!</h1>
        </div>
        <UserInfo info={{
          username: username,
          email: session.user.email
        }
        }/>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" value={session.user.email} disabled />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username || ''}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <button
            className="button primary block"
            onClick={() => updateProfile({ username, website, avatar_url })}
            disabled={loading}
          >
            {loading ? 'Loading ...' : 'Update'}
          </button>
        </div>
        <div>
          <button className="button block" onClick={signout}>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  )
}

type userInfo = {
  info : {
    username:string | null,
    email:string | undefined
  }
}

const UserInfo = (user : userInfo) => {
  return (
    <div className={styles.userInfo}>
      <div className={styles.usernameField}>
        <p style={{
          minWidth:"5rem",
          margin:0
        }}>Username</p>
        <p style={{
          margin:0
        }}>{user.info.username}</p>
      </div>
      <div className={styles.emailField}>
        <p style={{
          minWidth:"5rem",
          margin:0
        }}>Email</p>
        <input 
          id="email" 
          type="text" 
          value={user.info.email} 
          disabled 
          style={{
            margin:0
          }}/>
      </div>
    </div>
  )
}

export default Account;