import { useState, useEffect } from 'react'
import { Cloud, DollarSign, TrendingUp, TrendingDown, AlertTriangle, Moon, Sun, Settings, Download, RefreshCw, BarChart3, Activity } from 'lucide-react'
import { motion } from 'framer-motion'
import { AreaChart, Area, PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

interface CloudProvider {
  name: 'AWS' | 'GCP' | 'Azure'
  cost: number
  change: number
  services: number
  status: 'healthy' | 'warning' | 'critical'
}

interface CostData {
  date: string
  aws: number
  gcp: number
  azure: number
  total: number
}

const mockProviders: CloudProvider[] = [
  { name: 'AWS', cost: 2847.32, change: -12.5, services: 23, status: 'healthy' },
  { name: 'GCP', cost: 1256.89, change: 8.2, services: 12, status: 'warning' },
  { name: 'Azure', cost: 892.45, change: -3.1, services: 8, status: 'healthy' }
]

const mockCostData: CostData[] = [
  { date: 'Jan', aws: 2400, gcp: 1200, azure: 800, total: 4400 },
  { date: 'Feb', aws: 2600, gcp: 1100, azure: 850, total: 4550 },
  { date: 'Mar', aws: 2800, gcp: 1300, azure: 900, total: 5000 },
  { date: 'Apr', aws: 2500, gcp: 1250, azure: 880, total: 4630 },
  { date: 'May', aws: 2700, gcp: 1180, azure: 920, total: 4800 },
  { date: 'Jun', aws: 2847, gcp: 1257, azure: 892, total: 4996 },
  { date: 'Jul', aws: 2900, gcp: 1300, azure: 950, total: 5150 },
  { date: 'Aug', aws: 3000, gcp: 1350, azure: 1000, total: 5350 },
  { date: 'Sep', aws: 3100, gcp: 1400, azure: 1050, total: 5550 },
  { date: 'Oct', aws: 3200, gcp: 1450, azure: 1100, total: 5750 },
  { date: 'Nov', aws: 3300, gcp: 1500, azure: 1150, total: 5950 },
  { date: 'Dec', aws: 3400, gcp: 1550, azure: 1200, total: 6150 }
]


function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [selectedPeriod, setSelectedPeriod] = useState<'7d' | '30d' | '90d' | '1y'>('30d')
  const [isRefreshing, setIsRefreshing] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true)
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  const totalCost = mockProviders.reduce((sum, provider) => sum + provider.cost, 0)
  const pieData = mockProviders.map((provider, index) => ({ 
    name: provider.name, 
    value: provider.cost, 
    color: index === 0 ? '#f97316' : index === 1 ? '#4285f4' : '#0078d4' 
  }))
  const totalChange = mockProviders.reduce((sum, provider) => sum + (provider.cost * provider.change / 100), 0)
  const changePercentage = (totalChange / totalCost) * 100

  const refreshData = async () => {
    setIsRefreshing(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsRefreshing(false)
  }

  const getProviderIcon = (provider: string) => {
    return <Cloud className="h-5 w-5" />
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-cost-low'
      case 'warning': return 'text-cost-medium'
      case 'critical': return 'text-cost-critical'
      default: return 'text-cloud-500'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cloud-50 to-cloud-100 dark:from-cloud-950 dark:to-cloud-900 transition-all duration-300">
      {/* Header */}
      <header className="border-b border-cloud-200 dark:border-cloud-700 bg-white/80 dark:bg-cloud-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-cloud-500 to-cloud-600 rounded-lg">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-cloud-900 dark:text-white">CloudCost Optimizer</h1>
                <p className="text-sm text-cloud-500 dark:text-cloud-400">Multi-cloud Cost Dashboard</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 bg-cloud-100 dark:bg-cloud-800 rounded-lg p-1">
                {(['7d', '30d', '90d', '1y'] as const).map((period) => (
                  <button
                    key={period}
                    onClick={() => setSelectedPeriod(period)}
                    className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                      selectedPeriod === period
                        ? 'bg-white dark:bg-cloud-700 text-cloud-900 dark:text-white shadow-sm'
                        : 'text-cloud-600 dark:text-cloud-400 hover:text-cloud-900 dark:hover:text-white'
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
              
              <button
                onClick={refreshData}
                disabled={isRefreshing}
                className="p-2 rounded-lg bg-cloud-100 dark:bg-cloud-800 text-cloud-600 dark:text-cloud-300 hover:bg-cloud-200 dark:hover:bg-cloud-700 transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`h-5 w-5 ${isRefreshing ? 'animate-spin' : ''}`} />
              </button>
              
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-cloud-100 dark:bg-cloud-800 text-cloud-600 dark:text-cloud-300 hover:bg-cloud-200 dark:hover:bg-cloud-700 transition-colors"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              
              <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cloud-500 to-cloud-600 text-white rounded-lg hover:from-cloud-600 hover:to-cloud-700 transition-all">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-cloud-800 rounded-xl p-6 shadow-soft border border-cloud-200 dark:border-cloud-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-cloud-600 dark:text-cloud-400">Total Cost</p>
                <p className="text-2xl font-bold text-cloud-900 dark:text-white">
                  ${totalCost.toLocaleString()}
                </p>
                <div className="flex items-center mt-1">
                  {changePercentage > 0 ? (
                    <TrendingUp className="h-4 w-4 text-cost-high mr-1" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-cost-low mr-1" />
                  )}
                  <span className={`text-sm font-medium ${changePercentage > 0 ? 'text-cost-high' : 'text-cost-low'}`}>
                    {Math.abs(changePercentage).toFixed(1)}%
                  </span>
                </div>
              </div>
              <div className="p-3 bg-cloud-100 dark:bg-cloud-700 rounded-lg">
                <DollarSign className="h-6 w-6 text-cloud-600 dark:text-cloud-400" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-cloud-800 rounded-xl p-6 shadow-soft border border-cloud-200 dark:border-cloud-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-cloud-600 dark:text-cloud-400">Active Services</p>
                <p className="text-2xl font-bold text-cloud-900 dark:text-white">
                  {mockProviders.reduce((sum, p) => sum + p.services, 0)}
                </p>
                <p className="text-sm text-cloud-500 dark:text-cloud-400 mt-1">Across 3 providers</p>
              </div>
              <div className="p-3 bg-cloud-100 dark:bg-cloud-700 rounded-lg">
                <Activity className="h-6 w-6 text-cloud-600 dark:text-cloud-400" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-cloud-800 rounded-xl p-6 shadow-soft border border-cloud-200 dark:border-cloud-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-cloud-600 dark:text-cloud-400">Optimization</p>
                <p className="text-2xl font-bold text-cost-low">$342</p>
                <p className="text-sm text-cloud-500 dark:text-cloud-400 mt-1">Potential savings</p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                <TrendingDown className="h-6 w-6 text-cost-low" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-cloud-800 rounded-xl p-6 shadow-soft border border-cloud-200 dark:border-cloud-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-cloud-600 dark:text-cloud-400">Alerts</p>
                <p className="text-2xl font-bold text-cost-medium">2</p>
                <p className="text-sm text-cloud-500 dark:text-cloud-400 mt-1">Require attention</p>
              </div>
              <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-cost-medium" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cost Trend Chart */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-cloud-800 rounded-xl p-6 shadow-soft border border-cloud-200 dark:border-cloud-700">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-cloud-900 dark:text-white">Cost Trends</h2>
                <button className="flex items-center space-x-2 px-3 py-1.5 bg-cloud-100 dark:bg-cloud-700 text-cloud-600 dark:text-cloud-300 rounded-lg hover:bg-cloud-200 dark:hover:bg-cloud-600 transition-colors">
                  <Download className="h-4 w-4" />
                  <span>Export</span>
                </button>
              </div>
              
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={mockCostData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="date" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: darkMode ? '#1e293b' : '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px'
                      }}
                    />
                    <Legend />
                    <Area type="monotone" dataKey="aws" stackId="1" stroke="#f97316" fill="#f97316" fillOpacity={0.6} />
                    <Area type="monotone" dataKey="gcp" stackId="1" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.6} />
                    <Area type="monotone" dataKey="azure" stackId="1" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.4} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Provider Breakdown */}
          <div className="space-y-6">
            {/* Cost Distribution */}
            <div className="bg-white dark:bg-cloud-800 rounded-xl p-6 shadow-soft border border-cloud-200 dark:border-cloud-700">
              <h3 className="text-lg font-semibold text-cloud-900 dark:text-white mb-4">Cost Distribution</h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value: number) => [`$${value}`, 'Cost']} />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Provider List */}
            <div className="bg-white dark:bg-cloud-800 rounded-xl p-6 shadow-soft border border-cloud-200 dark:border-cloud-700">
              <h3 className="text-lg font-semibold text-cloud-900 dark:text-white mb-4">Cloud Providers</h3>
              <div className="space-y-4">
                {mockProviders.map((provider) => (
                  <motion.div
                    key={provider.name}
                    className="flex items-center justify-between p-4 rounded-lg bg-cloud-50 dark:bg-cloud-700 border border-cloud-200 dark:border-cloud-600"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg provider-${provider.name.toLowerCase()}`}>
                        {getProviderIcon(provider.name)}
                      </div>
                      <div>
                        <p className="font-medium text-cloud-900 dark:text-white">{provider.name}</p>
                        <p className="text-sm text-cloud-500 dark:text-cloud-400">{provider.services} services</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="font-semibold text-cloud-900 dark:text-white">
                        ${provider.cost.toLocaleString()}
                      </p>
                      <div className="flex items-center justify-end">
                        {provider.change > 0 ? (
                          <TrendingUp className="h-3 w-3 text-cost-high mr-1" />
                        ) : (
                          <TrendingDown className="h-3 w-3 text-cost-low mr-1" />
                        )}
                        <span className={`text-xs font-medium ${provider.change > 0 ? 'text-cost-high' : 'text-cost-low'}`}>
                          {Math.abs(provider.change)}%
                        </span>
                        <div className={`ml-2 w-2 h-2 rounded-full ${getStatusColor(provider.status)}`} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
