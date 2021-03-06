import GhostContentAPI, { Params, PostsOrPages } from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: process.env.GHOST_CONTENT_API_URL,
  key: process.env.GHOST_CONTENT_API_KEY,
  version: 'v3',
});

export const getAllPosts = async () => await api.posts.browse({ limit: 'all' });
export const getPostBySlug = async (slug: string | string[]) => await api.posts.read({ slug: <string>slug }, { include: ['tags', 'authors'], });

export const defaultLimit = 5;
