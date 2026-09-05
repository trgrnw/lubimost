import { useState } from 'react'
import { Heart, Moon, ShoppingBag, Smile, Utensils, GlassWater } from 'lucide-react'

type Stats = { food: number; water: number; joy: number; sleep: number; love: number }
const actions = [
  { key: 'food', label: 'Покормить', icon: Utensils }, { key: 'water', label: 'Напоить', icon: GlassWater },
  { key: 'joy', label: 'Погладить', icon: Smile }, { key: 'sleep', label: 'Уложить', icon: Moon },
] as const

export default function Tamagotchi() {
  const [stats, setStats] = useState<Stats>({ food: 72, water: 84, joy: 91, sleep: 64, love: 37 })
  const [message, setMessage] = useState('Тагги рад вас видеть')
  const act = (key: keyof Stats, label: string) => {
    setStats(s => ({ ...s, [key]: Math.min(100, s[key] + 12), love: Math.min(100, s.love + 2) }))
    setMessage(`${label}! Тагги мурчит от счастья`)
  }
  return <section className="panel pet-panel">
    <div className="section-heading"><div><p className="eyebrow">НАШ ТАМАГОЧИ</p><h2>Тагги</h2></div><div className="level"><Heart size={15} fill="currentColor" /> Уровень любви {stats.love}</div></div>
    <div className="pet-stage">
      <div className="cat" role="img" aria-label="Милый котёнок Тагги"><i className="ear left"/><i className="ear right"/><div className="cat-face"><b className="eye left"/><b className="eye right"/><em>ω</em></div><div className="cat-body"/></div>
      <p>{message}</p>
    </div>
    <div className="pet-stats">
      {Object.entries(stats).slice(0,4).map(([key, value]) => <div key={key}><span>{({food:'Сытость',water:'Вода',joy:'Радость',sleep:'Сон'} as Record<string,string>)[key]}</span><div className="bar"><i style={{width:`${value}%`}}/></div><b>{value}%</b></div>)}
    </div>
    <div className="pet-actions">{actions.map(({key,label,icon:Icon}) => <button key={key} onClick={()=>act(key,label)}><Icon size={18}/>{label}</button>)}<button onClick={()=>setMessage('Магазин одежды скоро пополнится')}><ShoppingBag size={18}/>Магазин</button></div>
  </section>
}
