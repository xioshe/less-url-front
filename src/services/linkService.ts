import axios from 'axios'
import type { Link } from '@/stores/links'

const api = axios.create({
  //   baseURL: import.meta.env.VITE_API_BASE_URL,
  baseURL: '/api/v1',
})

export const LinkService = {
  async getLinks(query: string = ''): Promise<Link[]> {
    const response = await api.get(`/links?${query}`)
    if (response.status === 200) {
      return response.data.data
    } else {
      throw new Error('Failed to fetch links')
    }
  },
  async createLink(
    longUrl: string,
    customAlias: string | null,
    expirationTime: number | null
  ): Promise<Link> {
    const response = await api.post('/links', { longUrl, customAlias, expirationTime })
    if (response.status === 200) {
      return response.data.data
    } else {
      throw new Error('Failed to create link')
    }
  },
  async getLinkDetails(id: string): Promise<Link> {
    const response = await api.get(`/links/${id}`)
    if (response.status === 200) {
      return response.data.data
    } else {
      throw new Error('Failed to fetch link details')
    }
  },
}