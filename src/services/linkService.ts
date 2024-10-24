import type { Link, LinkDataCounts } from '@/stores/links'
import type { QueryParams, PaginationResponse } from '@/api/axiosWrapper'
import { api } from '@/api/axiosWrapper'

export const LinkService = {
  async getLinks(params: QueryParams = {}): Promise<PaginationResponse<Link>> {
    const response = await api.get(`/links`, { ...params })
    if (response.status === 200) {
      return response.data
    } else {
      throw new Error('Failed to fetch links')
    }
  },
  async createLink(
    originalUrl: string,
    customAlias: string | null,
    expiresAt: number | null
  ): Promise<Link> {
    const response = await api.post('/links', { originalUrl, customAlias, expiresAt })
    if (response.status === 200) {
      return response.data
    } else {
      throw new Error('Failed to create link')
    }
  },
  async getLinkDetails(id: string): Promise<Link> {
    const response = await api.get(`/links/${id}`)
    if (response.status === 200) {
      return response.data
    } else {
      throw new Error('Failed to fetch link details')
    }
  },
  async countLinks({
    requiredGuest = false,
    requiredJWT = false,
  }: {
    requiredGuest?: boolean
    requiredJWT?: boolean
  }): Promise<LinkDataCounts> {
    const { data } = await api.get<LinkDataCounts>(
      '/links/counts',
      {},
      { requiredGuest, requiredJWT }
    )
    return data
  },
}
