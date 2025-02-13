module.exports = {
  // Sidebar for "Get Started"
  docsSidebar: [
    {
      type: "doc",
      id: "overview",
    },
    {
      type: "category",
      label: "Get started",
      items: [
        {
          type: "autogenerated",
          dirName: "get-started",
        },
      ],
    },
    {
      type: "category",
      label: "CLI",
      items: [
        {
          type: "autogenerated",
          dirName: "cli",
        },
      ],
    },
    {
      type: "category",
      label: "Pods",
      items: [
        {
          type: "autogenerated",
          dirName: "pods",
        },
      ],
    },
    {
      type: "category",
      label: "Serverless",
      items: [
        {
          type: "autogenerated",
          dirName: "serverless",
        },
      ],
    },
    {
      type: "category",
      label: "SDKs",
      items: [
        {
          type: "autogenerated",
          dirName: "sdks",
        },
      ],
    },
    {
      type: "category",
      label: "Hosting",
      items: [
        {
          type: "autogenerated",
          dirName: "hosting",
        },
      ],
    },
    {
      type: "category",
      label: "References",
      items: [
        {
          type: "autogenerated",
          dirName: "references",
        },
        {
          "type": "link",
          "label": "GraphQL Spec",
          "href": "https://graphql-spec.runpod.io",
        },
      ],
    },
    {
      type: "doc",
      id: "glossary",
    },
  ],

  // Sidebar for "Tutorials"
  tutorialsSidebar: [
    {
      type: "category",
      label: "Introduction",
      items: [
        {
          type: "autogenerated",
          dirName: "tutorials/introduction",
        },
      ],
    },
    {
      type: "category",
      label: "Pods",
      items: [
        {
          type: "autogenerated",
          dirName: "tutorials/pods",
        },
      ],
    },
    {
      type: "category",
      label: "Serverless",
      items: [
        {
          type: "autogenerated",
          dirName: "tutorials/serverless",
        },
      ],
    },
    {
      type: "category",
      label: "Migrations",
      items: [
        {
          type: "autogenerated",
          dirName: "tutorials/migrations",
        },
      ],
    },
  ],
};
