import React from 'react'

const DarkShadowShowcase = () => {
  const shadowSizes = ['sm', 'md', 'lg', 'xl', '2xl', 'inner']

  const shadowColors = {
    Primary: '0, 149, 255', // blue-500 (RGB)
    Secondary: '34, 197, 94', // green-500
    Accent: '168, 85, 247', // purple-500
    Neutral: '107, 114, 128', // gray-500
    Red: '239, 68, 68',
    Orange: '249, 115, 22',
  }

  const cellBgClass = 'bg-gray-800'

  // Different shadow "strengths" for Tailwind sizes
  const shadowMap = {
    sm: '0 1px 2px',
    md: '0 4px 6px',
    lg: '0 10px 15px',
    xl: '0 20px 25px',
    '2xl': '0 25px 50px',
    inner: 'inset 0 2px 4px',
  }

  return (
    <div className="min-h-screen bg-gray-200 p-8 text-white">
      <h1 className="mb-10 text-center text-4xl font-bold text-blue-400">
        Dark Theme Box Shadow Showcase
      </h1>
      <p className="mb-8 text-center text-gray-400">
        Custom-colored, high-contrast shadows that actually show up in dark mode.
      </p>

      <div className="overflow-x-auto rounded-lg shadow-2xl">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr className="bg-gray-700">
              <th className="w-32 px-4 py-3 text-left text-xs font-medium tracking-wider text-gray-300 uppercase">
                Shadow Color
              </th>
              {shadowSizes.map((size) => (
                <th
                  key={size}
                  className="px-4 py-3 text-center text-xs font-medium tracking-wider text-gray-300 uppercase"
                >
                  {`shadow-${size}`}
                </th>
              ))}
              <th className="px-4 py-3 text-center text-xs font-medium tracking-wider text-gray-300 uppercase">
                shadow-none
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-800">
            {Object.entries(shadowColors).map(([name, rgb]) => (
              <tr key={name} className="transition-colors hover:bg-gray-800">
                {/* Label */}
                <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                  <span
                    className="rounded-full px-3 py-1 text-xs font-semibold"
                    style={{
                      backgroundColor: `rgb(${rgb})`,
                      color: 'white',
                    }}
                  >
                    {name} Shadow
                  </span>
                </td>

                {/* Each shadow cell */}
                {shadowSizes.map((size) => (
                  <td key={`${name}-${size}`} className="px-4 py-4 text-center">
                    <div
                      className={`mx-auto flex h-12 w-20 items-center justify-center rounded-md text-xs font-bold ${cellBgClass}`}
                      style={{
                        boxShadow: `${shadowMap[size]} rgba(${rgb}, 0.8)`,
                      }}
                    >
                      {size.toUpperCase()}
                    </div>
                    <p className="mt-1 text-xs text-gray-500">{`shadow-${size}`}</p>
                  </td>
                ))}

                {/* Shadow-none */}
                <td className="px-4 py-4 text-center">
                  <div
                    className={`mx-auto flex h-12 w-20 items-center justify-center rounded-md text-xs font-bold ${cellBgClass}`}
                    style={{ boxShadow: 'none' }}
                  >
                    NONE
                  </div>
                  <p className="mt-1 text-xs text-gray-500">shadow-none</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DarkShadowShowcase
