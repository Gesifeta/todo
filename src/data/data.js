export const users = [
  {
    _id: "userId123",
    name: "John Doe",
    email: "johndoe@example.com",
    progress: [],
  },
];
export const tasks = [
  {
    _id: "day01",
    dayNumber: 1,
    topic: "AWS Fundamentals",
    description: "Understand AWS core concepts, regions, and services.",
    activities: [
      {
        taskId: "task01",
        description: "Read about AWS regions and availability zones.",
        status: "pending",
      },
      {
        taskId: "task02",
        description: "Study the Well-Architected Framework.",
        status: "pending",
      },
    ],
    status: "pending",
  },
  {
    _id: "day02",
    dayNumber: 2,
    topic: "Identity and Access Management (IAM)",
    description: "Learn about users, groups, roles, and policies.",
    activities: [
      {
        taskId: "task01",
        description: "Create IAM roles and policies.",
        status: "pending",
      },
    ],
    status: "pending",
  },
  {
    _id: "day03",
    dayNumber: 3,
    topic: "Elastic Compute Cloud (EC2)",
    description: "Learn about EC2 instances, pricing, and AMIs.",
    activities: [
      {
        taskId: "task01",
        description: "Launch and configure EC2 instances.",
        status: "pending",
      },
    ],
    status: "pending",
  },
  {
    _id: "day04",
    dayNumber: 4,
    topic: "Elastic Compute Cloud (EC2) - Continued",
    description: "Deepen understanding of EC2 configurations and features.",
    activities: [
      {
        taskId: "task01",
        description: "Practice configuring security groups for EC2.",
        status: "pending",
      },
    ],
    status: "pending",
  },
  {
    _id: "day05",
    dayNumber: 5,
    topic: "Load Balancing and Auto Scaling",
    description:
      "Study ELB types, Auto Scaling Groups (ASGs), and configurations.",
    activities: [
      {
        taskId: "task01",
        description: "Set up an ASG with a load balancer.",
        status: "pending",
      },
    ],
    status: "pending",
  },
  {
    _id: "day06",
    dayNumber: 6,
    topic: "Amazon Virtual Private Cloud (VPC)",
    description: "Learn about subnets, route tables, and gateways.",
    activities: [
      {
        taskId: "task01",
        description: "Create a custom VPC with public and private subnets.",
        status: "pending",
      },
    ],
    status: "pending",
  },
  {
    _id: "day07",
    dayNumber: 7,
    topic: "Amazon Virtual Private Cloud (VPC) - Continued",
    description: "Hands-on practice with advanced VPC configurations.",
    activities: [
      {
        taskId: "task01",
        description: "Configure route tables and NAT gateways.",
        status: "pending",
      },
    ],
    status: "pending",
  },
  {
    _id: "day08",
    dayNumber: 8,
    topic: "Simple Storage Service (S3)",
    description: "Study bucket policies, versioning, and lifecycle rules.",
    activities: [
      {
        taskId: "task01",
        description: "Configure S3 bucket policies.",
        status: "pending",
      },
      {
        taskId: "task02",
        description: "Set up versioning and lifecycle rules.",
        status: "pending",
      },
    ],
    status: "pending",
  },
  {
    _id: "day09",
    dayNumber: 9,
    topic: "Simple Storage Service (S3) - Continued",
    description: "Explore S3 advanced features like replication.",
    activities: [
      {
        taskId: "task01",
        description: "Implement cross-region replication for S3 buckets.",
        status: "pending",
      },
    ],
    status: "pending",
  },
  {
    _id: "day10",
    dayNumber: 10,
    topic: "Caching and DNS",
    description: "Study Amazon CloudFront and Route 53.",
    activities: [
      {
        taskId: "task01",
        description: "Set up a basic CloudFront distribution.",
        status: "pending",
      },
      {
        taskId: "task02",
        description: "Configure Route 53 for domain management.",
        status: "pending",
      },
    ],
    status: "pending",
  },
];
export const progresses = [
  {
    _id: "progress01",
    userId: "userId123",
    dayId: "day01",
    completionStatus: "completed",
    notes: "",
    completedactivities: [],
  },
  {
    _id: "progress02",
    userId: "userId123",
    dayId: "day02",
    completionStatus: "completed",
    notes: "",
    completedactivities: [],
  },
  {
    _id: "progress03",
    userId: "userId123",
    dayId: "day03",
    completionStatus: "completed",
    notes: "",
    completedactivities: [],
  },
  {
    _id: "progress04",
    userId: "userId123",
    dayId: "day04",
    completionStatus: "not-started",
    notes: "",
    completedactivities: [],
  },
  {
    _id: "progress05",
    userId: "userId123",
    dayId: "day05",
    completionStatus: "in-progress",
    notes: "",
    completedactivities: [],
  },
  {
    _id: "progress06",
    userId: "userId123",
    dayId: "day06",
    completionStatus: "not-started",
    notes: "",
    completedactivities: [],
  },
  {
    _id: "progress07",
    userId: "userId123",
    dayId: "day07",
    completionStatus: "completed",
    notes: "",
    completedactivities: [],
  },
  {
    _id: "progress08",
    userId: "userId123",
    dayId: "day08",
    completionStatus: "not-started",
    notes: "",
    completedactivities: [],
  },
  {
    _id: "progress09",
    userId: "userId123",
    dayId: "day09",
    completionStatus: "in-progress",
    notes: "",
    completedactivities: [],
  },
  {
    _id: "progress10",
    userId: "userId123",
    dayId: "day10",
    completionStatus: "in-progress",
    notes: "",
    completedactivities: [],
  },
];
