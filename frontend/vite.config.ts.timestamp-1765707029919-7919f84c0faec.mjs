// vite.config.ts
import { defineConfig } from "file:///Users/leejaeyoung/Desktop/GAD/frontend/node_modules/vite/dist/node/index.js";
import react from "file:///Users/leejaeyoung/Desktop/GAD/frontend/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import tailwindcss from "file:///Users/leejaeyoung/Desktop/GAD/frontend/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///Users/leejaeyoung/Desktop/GAD/frontend/node_modules/autoprefixer/lib/autoprefixer.js";
var __vite_injected_original_dirname = "/Users/leejaeyoung/Desktop/GAD/frontend";
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "vaul@1.1.2": "vaul",
      "sonner@2.0.3": "sonner",
      "recharts@2.15.2": "recharts",
      "react-resizable-panels@2.1.7": "react-resizable-panels",
      "react-hook-form@7.55.0": "react-hook-form",
      "react-day-picker@8.10.1": "react-day-picker",
      "next-themes@0.4.6": "next-themes",
      "input-otp@1.4.2": "input-otp",
      "embla-carousel-react@8.6.0": "embla-carousel-react",
      "cmdk@1.1.1": "cmdk",
      "class-variance-authority@0.7.1": "class-variance-authority",
      "@radix-ui/react-tooltip@1.1.8": "@radix-ui/react-tooltip",
      "@radix-ui/react-toggle@1.1.2": "@radix-ui/react-toggle",
      "@radix-ui/react-toggle-group@1.1.2": "@radix-ui/react-toggle-group",
      "@radix-ui/react-tabs@1.1.3": "@radix-ui/react-tabs",
      "@radix-ui/react-switch@1.1.3": "@radix-ui/react-switch",
      "@radix-ui/react-slot@1.1.2": "@radix-ui/react-slot",
      "@radix-ui/react-slider@1.2.3": "@radix-ui/react-slider",
      "@radix-ui/react-separator@1.1.2": "@radix-ui/react-separator",
      "@radix-ui/react-select@2.1.6": "@radix-ui/react-select",
      "@radix-ui/react-scroll-area@1.2.3": "@radix-ui/react-scroll-area",
      "@radix-ui/react-radio-group@1.2.3": "@radix-ui/react-radio-group",
      "@radix-ui/react-progress@1.1.2": "@radix-ui/react-progress",
      "@radix-ui/react-popover@1.1.6": "@radix-ui/react-popover",
      "@radix-ui/react-navigation-menu@1.2.5": "@radix-ui/react-navigation-menu",
      "@radix-ui/react-menubar@1.1.6": "@radix-ui/react-menubar",
      "@radix-ui/react-label@2.1.2": "@radix-ui/react-label",
      "@radix-ui/react-hover-card@1.1.6": "@radix-ui/react-hover-card",
      "@radix-ui/react-dropdown-menu@2.1.6": "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-dialog@1.1.6": "@radix-ui/react-dialog",
      "@radix-ui/react-context-menu@2.2.6": "@radix-ui/react-context-menu",
      "@radix-ui/react-collapsible@1.1.3": "@radix-ui/react-collapsible",
      "@radix-ui/react-checkbox@1.1.4": "@radix-ui/react-checkbox",
      "@radix-ui/react-avatar@1.1.3": "@radix-ui/react-avatar",
      "@radix-ui/react-aspect-ratio@1.1.2": "@radix-ui/react-aspect-ratio",
      "@radix-ui/react-alert-dialog@1.1.6": "@radix-ui/react-alert-dialog",
      "@radix-ui/react-accordion@1.2.3": "@radix-ui/react-accordion",
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  build: {
    target: "esnext",
    outDir: "build"
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer()
      ]
    }
  },
  server: {
    port: 5173,
    open: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbGVlamFleW91bmcvRGVza3RvcC9HQUQvZnJvbnRlbmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9sZWVqYWV5b3VuZy9EZXNrdG9wL0dBRC9mcm9udGVuZC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvbGVlamFleW91bmcvRGVza3RvcC9HQUQvZnJvbnRlbmQvdml0ZS5jb25maWcudHNcIjtcbiAgaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG4gIGltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2MnO1xuICBpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tICd0YWlsd2luZGNzcyc7IC8vIHRhaWx3aW5kY3NzIFx1Qzc4NFx1RDNFQ1x1RDJCOFxuaW1wb3J0IGF1dG9wcmVmaXhlciBmcm9tICdhdXRvcHJlZml4ZXInOyAvLyBhdXRvcHJlZml4ZXIgXHVDNzg0XHVEM0VDXHVEMkI4XG5cbiAgZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgZXh0ZW5zaW9uczogWycuanMnLCAnLmpzeCcsICcudHMnLCAnLnRzeCcsICcuanNvbiddLFxuICAgICAgYWxpYXM6IHtcbiAgICAgICAgJ3ZhdWxAMS4xLjInOiAndmF1bCcsXG4gICAgICAgICdzb25uZXJAMi4wLjMnOiAnc29ubmVyJyxcbiAgICAgICAgJ3JlY2hhcnRzQDIuMTUuMic6ICdyZWNoYXJ0cycsXG4gICAgICAgICdyZWFjdC1yZXNpemFibGUtcGFuZWxzQDIuMS43JzogJ3JlYWN0LXJlc2l6YWJsZS1wYW5lbHMnLFxuICAgICAgICAncmVhY3QtaG9vay1mb3JtQDcuNTUuMCc6ICdyZWFjdC1ob29rLWZvcm0nLFxuICAgICAgICAncmVhY3QtZGF5LXBpY2tlckA4LjEwLjEnOiAncmVhY3QtZGF5LXBpY2tlcicsXG4gICAgICAgICduZXh0LXRoZW1lc0AwLjQuNic6ICduZXh0LXRoZW1lcycsXG4gICAgICAgICdpbnB1dC1vdHBAMS40LjInOiAnaW5wdXQtb3RwJyxcbiAgICAgICAgJ2VtYmxhLWNhcm91c2VsLXJlYWN0QDguNi4wJzogJ2VtYmxhLWNhcm91c2VsLXJlYWN0JyxcbiAgICAgICAgJ2NtZGtAMS4xLjEnOiAnY21kaycsXG4gICAgICAgICdjbGFzcy12YXJpYW5jZS1hdXRob3JpdHlAMC43LjEnOiAnY2xhc3MtdmFyaWFuY2UtYXV0aG9yaXR5JyxcbiAgICAgICAgJ0ByYWRpeC11aS9yZWFjdC10b29sdGlwQDEuMS44JzogJ0ByYWRpeC11aS9yZWFjdC10b29sdGlwJyxcbiAgICAgICAgJ0ByYWRpeC11aS9yZWFjdC10b2dnbGVAMS4xLjInOiAnQHJhZGl4LXVpL3JlYWN0LXRvZ2dsZScsXG4gICAgICAgICdAcmFkaXgtdWkvcmVhY3QtdG9nZ2xlLWdyb3VwQDEuMS4yJzogJ0ByYWRpeC11aS9yZWFjdC10b2dnbGUtZ3JvdXAnLFxuICAgICAgICAnQHJhZGl4LXVpL3JlYWN0LXRhYnNAMS4xLjMnOiAnQHJhZGl4LXVpL3JlYWN0LXRhYnMnLFxuICAgICAgICAnQHJhZGl4LXVpL3JlYWN0LXN3aXRjaEAxLjEuMyc6ICdAcmFkaXgtdWkvcmVhY3Qtc3dpdGNoJyxcbiAgICAgICAgJ0ByYWRpeC11aS9yZWFjdC1zbG90QDEuMS4yJzogJ0ByYWRpeC11aS9yZWFjdC1zbG90JyxcbiAgICAgICAgJ0ByYWRpeC11aS9yZWFjdC1zbGlkZXJAMS4yLjMnOiAnQHJhZGl4LXVpL3JlYWN0LXNsaWRlcicsXG4gICAgICAgICdAcmFkaXgtdWkvcmVhY3Qtc2VwYXJhdG9yQDEuMS4yJzogJ0ByYWRpeC11aS9yZWFjdC1zZXBhcmF0b3InLFxuICAgICAgICAnQHJhZGl4LXVpL3JlYWN0LXNlbGVjdEAyLjEuNic6ICdAcmFkaXgtdWkvcmVhY3Qtc2VsZWN0JyxcbiAgICAgICAgJ0ByYWRpeC11aS9yZWFjdC1zY3JvbGwtYXJlYUAxLjIuMyc6ICdAcmFkaXgtdWkvcmVhY3Qtc2Nyb2xsLWFyZWEnLFxuICAgICAgICAnQHJhZGl4LXVpL3JlYWN0LXJhZGlvLWdyb3VwQDEuMi4zJzogJ0ByYWRpeC11aS9yZWFjdC1yYWRpby1ncm91cCcsXG4gICAgICAgICdAcmFkaXgtdWkvcmVhY3QtcHJvZ3Jlc3NAMS4xLjInOiAnQHJhZGl4LXVpL3JlYWN0LXByb2dyZXNzJyxcbiAgICAgICAgJ0ByYWRpeC11aS9yZWFjdC1wb3BvdmVyQDEuMS42JzogJ0ByYWRpeC11aS9yZWFjdC1wb3BvdmVyJyxcbiAgICAgICAgJ0ByYWRpeC11aS9yZWFjdC1uYXZpZ2F0aW9uLW1lbnVAMS4yLjUnOiAnQHJhZGl4LXVpL3JlYWN0LW5hdmlnYXRpb24tbWVudScsXG4gICAgICAgICdAcmFkaXgtdWkvcmVhY3QtbWVudWJhckAxLjEuNic6ICdAcmFkaXgtdWkvcmVhY3QtbWVudWJhcicsXG4gICAgICAgICdAcmFkaXgtdWkvcmVhY3QtbGFiZWxAMi4xLjInOiAnQHJhZGl4LXVpL3JlYWN0LWxhYmVsJyxcbiAgICAgICAgJ0ByYWRpeC11aS9yZWFjdC1ob3Zlci1jYXJkQDEuMS42JzogJ0ByYWRpeC11aS9yZWFjdC1ob3Zlci1jYXJkJyxcbiAgICAgICAgJ0ByYWRpeC11aS9yZWFjdC1kcm9wZG93bi1tZW51QDIuMS42JzogJ0ByYWRpeC11aS9yZWFjdC1kcm9wZG93bi1tZW51JyxcbiAgICAgICAgJ0ByYWRpeC11aS9yZWFjdC1kaWFsb2dAMS4xLjYnOiAnQHJhZGl4LXVpL3JlYWN0LWRpYWxvZycsXG4gICAgICAgICdAcmFkaXgtdWkvcmVhY3QtY29udGV4dC1tZW51QDIuMi42JzogJ0ByYWRpeC11aS9yZWFjdC1jb250ZXh0LW1lbnUnLFxuICAgICAgICAnQHJhZGl4LXVpL3JlYWN0LWNvbGxhcHNpYmxlQDEuMS4zJzogJ0ByYWRpeC11aS9yZWFjdC1jb2xsYXBzaWJsZScsXG4gICAgICAgICdAcmFkaXgtdWkvcmVhY3QtY2hlY2tib3hAMS4xLjQnOiAnQHJhZGl4LXVpL3JlYWN0LWNoZWNrYm94JyxcbiAgICAgICAgJ0ByYWRpeC11aS9yZWFjdC1hdmF0YXJAMS4xLjMnOiAnQHJhZGl4LXVpL3JlYWN0LWF2YXRhcicsXG4gICAgICAgICdAcmFkaXgtdWkvcmVhY3QtYXNwZWN0LXJhdGlvQDEuMS4yJzogJ0ByYWRpeC11aS9yZWFjdC1hc3BlY3QtcmF0aW8nLFxuICAgICAgICAnQHJhZGl4LXVpL3JlYWN0LWFsZXJ0LWRpYWxvZ0AxLjEuNic6ICdAcmFkaXgtdWkvcmVhY3QtYWxlcnQtZGlhbG9nJyxcbiAgICAgICAgJ0ByYWRpeC11aS9yZWFjdC1hY2NvcmRpb25AMS4yLjMnOiAnQHJhZGl4LXVpL3JlYWN0LWFjY29yZGlvbicsXG4gICAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJyksXG4gICAgICB9LFxuICAgIH0sXG4gICAgYnVpbGQ6IHtcbiAgICAgIHRhcmdldDogJ2VzbmV4dCcsXG4gICAgICBvdXREaXI6ICdidWlsZCcsXG4gICAgfSxcbiAgICBjc3M6IHtcbiAgICAgIHBvc3Rjc3M6IHtcbiAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgIHRhaWx3aW5kY3NzKCksXG4gICAgICAgICAgYXV0b3ByZWZpeGVyKCksXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgc2VydmVyOiB7XG4gICAgICBwb3J0OiA1MTczLFxuICAgICAgb3BlbjogdHJ1ZSxcbiAgICB9LFxuICB9KTsiXSwKICAibWFwcGluZ3MiOiAiO0FBQ0UsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNuQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLGtCQUFrQjtBQUx6QixJQUFNLG1DQUFtQztBQU92QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsU0FBUztBQUFBLElBQ1AsWUFBWSxDQUFDLE9BQU8sUUFBUSxPQUFPLFFBQVEsT0FBTztBQUFBLElBQ2xELE9BQU87QUFBQSxNQUNMLGNBQWM7QUFBQSxNQUNkLGdCQUFnQjtBQUFBLE1BQ2hCLG1CQUFtQjtBQUFBLE1BQ25CLGdDQUFnQztBQUFBLE1BQ2hDLDBCQUEwQjtBQUFBLE1BQzFCLDJCQUEyQjtBQUFBLE1BQzNCLHFCQUFxQjtBQUFBLE1BQ3JCLG1CQUFtQjtBQUFBLE1BQ25CLDhCQUE4QjtBQUFBLE1BQzlCLGNBQWM7QUFBQSxNQUNkLGtDQUFrQztBQUFBLE1BQ2xDLGlDQUFpQztBQUFBLE1BQ2pDLGdDQUFnQztBQUFBLE1BQ2hDLHNDQUFzQztBQUFBLE1BQ3RDLDhCQUE4QjtBQUFBLE1BQzlCLGdDQUFnQztBQUFBLE1BQ2hDLDhCQUE4QjtBQUFBLE1BQzlCLGdDQUFnQztBQUFBLE1BQ2hDLG1DQUFtQztBQUFBLE1BQ25DLGdDQUFnQztBQUFBLE1BQ2hDLHFDQUFxQztBQUFBLE1BQ3JDLHFDQUFxQztBQUFBLE1BQ3JDLGtDQUFrQztBQUFBLE1BQ2xDLGlDQUFpQztBQUFBLE1BQ2pDLHlDQUF5QztBQUFBLE1BQ3pDLGlDQUFpQztBQUFBLE1BQ2pDLCtCQUErQjtBQUFBLE1BQy9CLG9DQUFvQztBQUFBLE1BQ3BDLHVDQUF1QztBQUFBLE1BQ3ZDLGdDQUFnQztBQUFBLE1BQ2hDLHNDQUFzQztBQUFBLE1BQ3RDLHFDQUFxQztBQUFBLE1BQ3JDLGtDQUFrQztBQUFBLE1BQ2xDLGdDQUFnQztBQUFBLE1BQ2hDLHNDQUFzQztBQUFBLE1BQ3RDLHNDQUFzQztBQUFBLE1BQ3RDLG1DQUFtQztBQUFBLE1BQ25DLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxFQUNWO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxTQUFTO0FBQUEsTUFDUCxTQUFTO0FBQUEsUUFDUCxZQUFZO0FBQUEsUUFDWixhQUFhO0FBQUEsTUFDZjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
