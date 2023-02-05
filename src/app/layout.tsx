import Link from "next/link";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const links: any[] = [
    { to: "/test", text: "Test" },
    { to: "/", text: "Home" },
    { to: "/auth/login", text: "Login" },
  ];

  return (
    <html lang="en">
      <body>
        <div>
          <ul>
            <li>
              {links.map((item) => (
                <Link href={item.to} key={item.to}>
                  <button>
                    {item.text}
                  </button>
                </Link>
              ))}
            </li>
          </ul>
        </div>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
