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
                  buildHookId: '61962b07a7e442ed8f0207df',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-5ahfvi8b',
                  apiId: '09da1f7f-ab35-423a-ac68-fe84a18657f7'
                },
                {
                  buildHookId: '61962b0701074315aad39bf4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-16mr6swk',
                  apiId: '75cbc534-c52c-416c-9e9d-cd3ee34255c1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Bobeta/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-16mr6swk.netlify.app', category: 'apps'}
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
