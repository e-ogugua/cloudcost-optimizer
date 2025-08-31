# CloudCost Optimizer

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0.0-38B2AC.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF.svg)](https://vitejs.dev/)

A modern, minimal multi-cloud cost optimization dashboard that helps you monitor, analyze, and optimize your cloud spending across AWS, Google Cloud Platform, and Microsoft Azure.

## ✨ Key Features

### 📊 **Multi-Cloud Cost Monitoring**
- Real-time cost tracking across AWS, GCP, and Azure
- Provider-specific cost breakdowns and comparisons
- Historical cost trends and forecasting

### 📈 **Visual Analytics**
- Interactive cost trend charts with time period selection
- Cost distribution pie charts by cloud provider
- Service-level cost analysis and optimization insights

### 🎯 **Optimization Intelligence**
- Automated cost optimization recommendations
- Service utilization monitoring and alerts
- Potential savings identification and tracking

### 🌙 **Modern User Experience**
- Beautiful dark/light mode with system preference detection
- Responsive design optimized for desktop and mobile
- Smooth animations and micro-interactions
- Minimal, tech-focused design aesthetic

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn
- Modern web browser with ES6+ support

### Installation

```bash
# Clone the repository
git clone https://github.com/emmachuka/cloudcost-optimizer.git
cd cloudcost-optimizer

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## 🏗️ Architecture

### Tech Stack
- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS v4 with custom cloud-themed design system
- **Charts**: Recharts for data visualization
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React for consistent iconography
- **Build Tool**: Vite for fast development and optimized builds

### Project Structure
```
src/
├── App.tsx              # Main application component
├── index.css            # Global styles and Tailwind imports
├── main.tsx             # Application entry point
└── vite-env.d.ts        # Vite type definitions
```

### Design System

#### Color Palette
```css
/* Cloud Provider Colors */
--aws-orange: #FF9900
--gcp-blue: #4285F4
--azure-blue: #0078D4

/* Cost Level Indicators */
--cost-low: #10B981
--cost-medium: #F59E0B
--cost-high: #EF4444
--cost-critical: #DC2626

/* UI Colors */
--cloud-primary: #6366F1
--cloud-secondary: #8B5CF6
--cloud-accent: #06B6D4
```

#### Typography
- **Primary Font**: Inter (system font stack)
- **Monospace Font**: JetBrains Mono (for cost values and data)

## 🎨 Features Overview

### Dashboard Cards
- **Total Cost**: Aggregated spending across all cloud providers
- **Active Services**: Count of running services with cost impact
- **Optimization Potential**: Identified savings opportunities
- **Alerts**: Cost anomalies and budget threshold notifications

### Interactive Charts
- **Cost Trends**: Area chart showing spending patterns over time
- **Cost Distribution**: Pie chart breaking down costs by provider
- **Time Period Selection**: 7D, 30D, 90D, and 1Y views

### Provider Management
- Real-time status monitoring (Healthy, Warning, Critical)
- Cost change indicators with percentage tracking
- Service count and utilization metrics

## 🔧 Configuration

### Environment Variables
```bash
# API Configuration (optional)
VITE_API_BASE_URL=https://api.cloudcost-optimizer.com
VITE_ENABLE_ANALYTICS=true

# Cloud Provider APIs (for real data integration)
VITE_AWS_REGION=us-east-1
VITE_GCP_PROJECT_ID=your-project-id
VITE_AZURE_SUBSCRIPTION_ID=your-subscription-id
```

### Customization
The app uses a modular design system that can be easily customized:

1. **Colors**: Modify CSS variables in `src/index.css`
2. **Cloud Providers**: Add new providers in the `mockProviders` array
3. **Chart Themes**: Customize Recharts themes in component props
4. **Animations**: Adjust Framer Motion variants for different effects

## 📊 Data Integration

### Mock Data (Current)
The app currently uses realistic mock data for demonstration:
- Simulated cost trends and provider metrics
- Sample optimization recommendations
- Placeholder service utilization data

### Real Data Integration (Roadmap)
```typescript
// Example API integration structure
interface CloudCostAPI {
  getProviderCosts(): Promise<CloudProvider[]>
  getCostTrends(period: string): Promise<CostData[]>
  getOptimizationRecommendations(): Promise<Recommendation[]>
}
```

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Development Workflow
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes with proper TypeScript types
4. Test thoroughly across different screen sizes
5. Ensure code follows the existing style (ESLint + Prettier)
6. Commit with descriptive messages
7. Push to your fork and submit a pull request

### Code Standards
- Use TypeScript for all new code
- Follow the existing component structure and naming conventions
- Maintain responsive design principles
- Add proper error handling and loading states
- Include JSDoc comments for complex functions

### Areas for Contribution
- Real cloud provider API integrations (AWS Cost Explorer, GCP Billing, Azure Cost Management)
- Advanced optimization algorithms and recommendations
- Additional chart types and data visualizations
- Mobile app companion (React Native)
- Cost alerting and notification systems
- Multi-currency support and conversion
- Team collaboration and sharing features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [GitHub Wiki](https://github.com/emmachuka/cloudcost-optimizer/wiki)
- **Issues**: [GitHub Issues](https://github.com/emmachuka/cloudcost-optimizer/issues)
- **Discussions**: [GitHub Discussions](https://github.com/emmachuka/cloudcost-optimizer/discussions)
- **Email**: emmachuka@gmail.com

---

**CloudCost Optimizer** - Optimize your cloud spending with intelligent insights and beautiful analytics.

Built with ❤️ by [Emmanuel Ogugua](https://github.com/emmachuka) as part of the EmmanuelOS ecosystem.

