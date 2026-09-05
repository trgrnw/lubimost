export type Profile = { id: string; username: string; display_name: string; avatar_url?: string }
export type Photo = { id: string; title: string; description?: string; category: string; image_url: string; created_at?: string }
export type Movie = { id: string; title: string; poster_url?: string; status: 'watched' | 'planned'; thugger_rating?: number; vichka_rating?: number; comment?: string; favorite_moments?: string }
export type Artifact = { id: string; title: string; description?: string; file_url?: string; link_url?: string; created_at?: string }
