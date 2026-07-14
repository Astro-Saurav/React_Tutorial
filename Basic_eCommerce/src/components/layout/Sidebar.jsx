import { NavLink } from 'react-router';

export default function Sidebar() {
  const groups = [
    {
      title: 'Getting Started',
      links: [
        { title: 'Introduction', path: '/docs/getting-started' },
        { title: 'Installation', path: '/docs/getting-started/installation' },
      ]
    },
    {
      title: 'Core Concepts',
      links: [
        { title: 'React Basics', path: '/docs/react-basics' },
        { title: 'Components', path: '/docs/react-basics/components' },
        { title: 'Props & State', path: '/docs/react-basics/props-state' },
      ]
    },
    {
      title: 'Building the Demo',
      links: [
        { title: 'Project Overview', path: '/docs/project' },
        { title: 'Building the Layout', path: '/docs/project/layout' },
        { title: 'State Management (Cart)', path: '/docs/project/cart-context' },
        { title: 'The Cart Drawer', path: '/docs/project/cart-drawer' },
        { title: 'Product Cards', path: '/docs/project/product-card' },
        { title: 'Pages & Routing', path: '/docs/project/pages' },
        { title: 'Admin Dashboard', path: '/docs/admin-dashboard' },
      ]
    }
  ];

  return (
    <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block md:w-64 overflow-y-auto pr-6 lg:py-8 pl-4">
      <div className="w-full">
        {groups.map((group, index) => (
          <div key={index} className="pb-8">
            <h4 className="mb-2 rounded-md px-2 py-1 text-sm font-bold tracking-tight uppercase text-foreground">
              {group.title}
            </h4>
            <div className="grid grid-flow-row auto-rows-max text-sm relative border-l border-border ml-3 pl-3">
              {group.links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `group flex w-full items-center rounded-md border border-transparent px-3 py-2 transition-colors relative ${
                      isActive 
                        ? 'font-medium text-foreground bg-muted/50' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {/* Premium active state left-border indicator */}
                      {isActive && (
                        <span className="absolute -left-[13px] top-1/2 -translate-y-1/2 w-[2px] h-full bg-foreground rounded-full" />
                      )}
                      {link.title}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
