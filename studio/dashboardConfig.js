export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb67d8fdfd2a0e1b5e255f8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages2-studio-qv5e8wva',
                  apiId: 'e782dc8f-52da-4ef1-900e-880d0d322ab5'
                },
                {
                  buildHookId: '5eb67d8f55780e4b8601a8b1',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages2-web-9p33uf6u',
                  apiId: '797fc434-cb3e-48ce-99b8-657883aefb01'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/barbogast/sanity-nextjs-landing-pages2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages2-web-9p33uf6u.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
