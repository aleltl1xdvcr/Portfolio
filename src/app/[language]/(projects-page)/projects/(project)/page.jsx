'use server'

import Client from './client';

export default async function Project({ params }) {
  const { project } = await params
  const slug = decodeURIComponent(project)

  return (
    <div
      className="w-full flex justify-center items-center"
    >
      <Client
        project_slug={slug}
      />
    </div>
  )
}