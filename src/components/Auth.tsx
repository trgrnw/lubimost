import { FormEvent, useState } from 'react'
import { Heart, LockKeyhole, UserRound } from 'lucide-react'
import { accountEmail, allowedUsers, supabase } from '../lib/supabase'

export default function Auth() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  async function submit(e: FormEvent) {
    e.preventDefault(); setError('')
    const normalized = username.trim().toLowerCase()
    if (!allowedUsers.includes(normalized as typeof allowedUsers[number])) return setError('Этот музей открыт только для thugger и vichka')
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({ email: accountEmail(normalized), password })
    setLoading(false)
    if (error) setError('Неверный логин или пароль. Проверь данные аккаунта.')
  }
  return <main className="auth-page"><div className="auth-stars"/><form className="auth-card" onSubmit={submit}>
    <div className="auth-mark"><Heart fill="currentColor"/></div><p className="eyebrow">PRIVATE ARCHIVE · 07.07.2026</p><h1>thugger <span>×</span> vichka</h1><p>Наше место. Наши воспоминания. Только для двоих.</p>
    <label><span>Ник</span><div><UserRound size={18}/><input value={username} onChange={e=>setUsername(e.target.value)} placeholder="thugger или vichka" autoComplete="username"/></div></label>
    <label><span>Пароль</span><div><LockKeyhole size={18}/><input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Ваш пароль" autoComplete="current-password"/></div></label>
    {error && <p className="form-error">{error}</p>}<button className="primary" disabled={loading}>{loading?'Открываем музей…':'Войти в нашу вселенную'}</button>
  </form></main>
}
