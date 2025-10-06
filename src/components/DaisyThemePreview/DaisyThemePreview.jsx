import React from "react";

function DaisyThemePreview() {
  return (
    <div
      id="daisy-scope"
      data-theme="synthwave"
      className="bg-base-100 text-base-content min-h-screen p-8"
    >
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">Theme Preview 🌙</h1>
          <p className="text-lg opacity-70">
            Showing DaisyUI components styled with the{" "}
            <code className="bg-base-200 rounded px-2 py-1">night</code> theme.
          </p>
        </div>

        {/* Buttons */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Buttons</h2>
          <div className="flex flex-wrap gap-3">
            <button className="ds-btn ">Default</button>
            <button className="ds-btn ds-btn-primary">Primary</button>
            <button className="ds-btn ds-btn-secondary">Secondary</button>
            <button className="ds-btn ds-btn-accent">Accent</button>
            <button className="ds-btn ds-btn-info">Info</button>
            <button className="ds-btn ds-btn-success">Success</button>
            <button className="ds-btn ds-btn-warning">Warning</button>
            <button className="ds-btn ds-btn-error">Error</button>
          </div>
        </section>

        {/* Cards */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Cards</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="ds-card bg-base-200 shadow-xl">
              <div className="ds-card-body">
                <h3 className="ds-card-title">Base Card</h3>
                <p>
                  Uses <code>bg-base-200</code> background and theme text.
                </p>
                <div className="ds-card-actions justify-end">
                  <button className="ds-btn ds-btn-primary ds-btn-sm">
                    Action
                  </button>
                </div>
              </div>
            </div>
            <div className="ds-card bg-neutral text-neutral-content shadow-xl">
              <div className="ds-card-body">
                <h3 className="ds-card-title">Neutral Card</h3>
                <p>Good for darker accent sections.</p>
                <div className="ds-card-actions justify-end">
                  <button className="ds-btn ds-btn-secondary ds-btn-sm">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alerts */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Alerts</h2>
          <div className="space-y-2">
            <div className="ds-alert ds-alert-info">
              This is an info ds-alert
            </div>
            <div className="ds-alert ds-alert-success">
              This is a success ds-alert
            </div>
            <div className="ds-alert ds-alert-warning">
              This is a warning ds-alert
            </div>
            <div className="ds-alert ds-alert-error">
              This is an error ds-alert
            </div>
          </div>
        </section>

        {/* Inputs & Badges */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Inputs & Badges</h2>
          <div className="flex max-w-sm flex-col gap-4">
            <input
              type="text"
              placeholder="Type here..."
              className="input input-bordered w-full"
            />
            <div className="flex flex-wrap gap-2">
              <span className="ds-badge ds-badge-primary">Primary</span>
              <span className="ds-badge ds-badge-secondary">Secondary</span>
              <span className="ds-badge ds-badge-accent">Accent</span>
              <span className="ds-badge ds-badge-info">Info</span>
              <span className="ds-badge ds-badge-success">Success</span>
              <span className="ds-badge ds-badge-warning">Warning</span>
              <span className="ds-badge ds-badge-error">Error</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DaisyThemePreview;
