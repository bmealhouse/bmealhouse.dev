module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "dashboard.bmealhouse.dev",
          },
        ],
        destination: "/dashboard/:path*",
      },
    ];
  },
};
