# ClawLoops: Evolution from OpenClaw to Team-Level AI Workspace Platform

## Reshaping OpenClaw: Building a Self-Hosted Team-Level AI Workspace Platform

The field of AI development tools is evolving rapidly, with individual developers increasingly relying on powerful, isolated environments to build and test their models. OpenClaw has emerged as a robust solution for this purpose. However, as organizations seek to scale these capabilities across teams, the need for a more structured, governed, and collaborative platform has become increasingly prominent. ClawLoops was born in this context, transforming OpenClaw from a single-user tool into a comprehensive, self-hosted team platform.

This article explores the architectural shift of ClawLoops and its core value proposition, illustrating how it bridges the gap between individual AI experimentation and enterprise-level team collaboration.

## 1. The Vision: OpenClaw for Teams

The fundamental goal of ClawLoops is not just to provide a deployment scaffold for internal company use. Instead, it aims to elevate OpenClaw into a platform layer, endowing it with team-ready, governed, and self-hosted capabilities. Its core value proposition is refined as: on a single server, ClawLoops turns OpenClaw into a team platform that supports multi-user login, container-level isolation, unified model access, out-of-the-box default models, and minimized audit and usage visibility.

This vision is reflected in recommended slogans such as "OpenClaw for Teams" or "Self-hosted Team Runtime for OpenClaw." These phrases highlight the shift from a single development environment to a shared but secure collaborative space.

## 2. Core Architectural Components

To achieve this transformation, ClawLoops introduces a structured architecture designed to efficiently manage multiple users and their respective runtimes. The system relies on several key components working in synergy:

| Component | Main Responsibilities |
|-----------|-----------------------|
| **Traefik** | Serves as the unified entry point for the main domain and workspace subdomains, responsible for traffic routing and integration with platform session authentication. |
| **ClawLoops API** | The core backend of the platform, managing logins, sessions, invitations, user synchronization, member binding, permission checks, and file operations. |
| **ClawLoops Web** | The frontend interface, providing login pages, invitation acceptance pages, user workbenches, admin consoles, and file management interfaces. |
| **Runtime Manager** | A synchronous execution engine responsible for container operations, directory initialization, writing configuration files (openclaw.json), and binding shared networks. |
| **LiteLLM** | A shared model gateway deployed within the platform backend, providing one-to-many proxy capabilities for multiple runtimes. |
| **Per-User Runtime** | An isolated OpenClaw environment dedicated to a single user, ensuring secure and independent execution. |

This architecture ensures that while users have their own isolated environments, the platform maintains centralized control over authentication, model access, and resource allocation.

## 3. Philosophy: Admin Provides Service, User Just Uses

A distinctive feature of ClawLoops is its operational philosophy: "Admin provides service, user just uses." This approach significantly reduces the cognitive load on end-users.

In a native OpenClaw setup, users might need to manage their own API keys, configure model endpoints, and handle the complexities of container deployment. ClawLoops abstracts these complexities. When a user logs in, they are presented with an instantly available workspace. The platform has already handled the configuration of the runtime, the LiteLLM gateway, and secure routing via Traefik.

This separation of concerns allows developers to focus entirely on building and interacting with AI models rather than struggling with infrastructure and configuration management.

## 4. Differences Between ClawLoops and Native OpenClaw

To fully understand the value of ClawLoops, it is helpful to contrast its capabilities with a native OpenClaw installation:

| Capability | Native OpenClaw | ClawLoops |
|------------|-----------------|-----------|
| **Multi-user Login** | Weak / None | Yes |
| **Runtime Isolation** | Biased towards personal use | Independent runtime per user |
| **Unified Model Access** | Decentralized | Unified exit via LiteLLM gateway |
| **Admin Console** | Weak / None | Yes |
| **Enterprise Deployment** | Requires manual assembly | Clearer out-of-the-box deployment targets |

By addressing these key areas, ClawLoops provides a structured environment that meets the needs of modern development teams, ensuring security, efficiency, and ease of use.

## 5. Lightweight Authentication and Access Control

As ClawLoops aims to transform OpenClaw into a team-centric environment, it has meticulously designed an in-app lightweight authentication system.

### 5.1 Core Design Principles
- **Identity Truth Ownership**: ClawLoops fully owns user identities. User, PasswordHash, Session, and Invitation data are all managed and stored by the platform.
- **Single-Layer Invitation**: To simplify onboarding, ClawLoops adopts a single-layer invitation model via direct links.
- **Business and Runtime Decoupling**: Authentication success only grants access to the platform control plane. Runtime lifecycles remain decoupled and determined by business state.
- **Password Boundaries**: Security is maintained through strict password policies and hashing.

### 5.2 User and Session Models
The platform defines a minimal but robust model for users (userId, subjectId, username, role, status) and sessions (sessionId, userId, timestamps). Sessions are managed server-side, with browsers holding HttpOnly session cookies.

## 6. Runtime Management V2.2: Orchestrating Isolated Workspaces

The Runtime Manager (RM) plays a central role in orchestrating independent OpenClaw runtimes for each user. In V2.2, the RM has been significantly streamlined to focus on execution: writing configurations to disk, mounting, and starting runtimes.

### 6.1 Key Responsibilities of RM
- Creating, starting, stopping, and deleting OpenClaw runtime containers.
- Executing host directory initialization and permission corrections.
- Writing the full `openclaw.json` provided by the upstream to the host configuration directory.
- Connecting runtimes to the platform's shared network.

### 6.2 The Contract Mechanism
RM follows strict contracts between upstream (Orchestrator) and downstream (Runtime Container) components. All internal RM interfaces are synchronous, providing immediate feedback on observed states and internal endpoints.

## 7. The User Journey: Seamless AI Development Experience

ClawLoops prioritizes user experience by abstracting infrastructure complexities. A typical journey includes:
1. **Simplified Access**: A professional login interface that hides underlying routing complexities.
2. **Minimalist Workbench**: A clean interface focusing on "Start Runtime" and "Enter Workspace" without technical clutter.
3. **Automated Startup**: One-click activation that handles binding, configuration preparation, and container orchestration.
4. **Instant AI Capability**: Workspaces come pre-configured with model gateways and credentials, allowing immediate interaction with AI agents.

## 8. Open Source Strategy and Community Collaboration

To drive growth, ClawLoops positions itself as a platform layer for teams rather than just a deployment scaffold.
- **"OpenClaw for Teams"**: A direct and effective positioning for the community.
- **5-10 Minute Run-to-Ready**: Achieving low entry barriers through simple `docker compose` setups and default model backends.
- **Incremental Release Cadence**: Moving from basic isolation (v0.1.0) to enhanced shared spaces, admin views, and cost dashboards in future versions.

## 9. Conclusion

ClawLoops represents a significant advancement in the deployment and management of OpenClaw environments. By introducing robust authentication, centralized model management, and per-user isolated runtimes, it transforms a powerful personal tool into an indispensable platform for team-level AI development. As organizations continue to integrate AI into their workflows, platforms like ClawLoops will be essential for maintaining governance, security, and developer productivity.
