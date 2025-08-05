import './Dashboard.css';
import { useEffect, useState } from "react";
import { fetchDashboardData, fetchMonthlySalesData } from "../../Service/Dashboard.js";
import toast from "react-hot-toast";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Dashboard = () => {
    const [data, setData] = useState(null);
    const [monthlySales, setMonthlySales] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await fetchDashboardData();
                setData(response.data);

                const monthlySalesResponse = await fetchMonthlySalesData();
                setMonthlySales(monthlySalesResponse.data);
            } catch (error) {
                console.error(error);
                toast.error("Unable to view the data");
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    if (loading) {
        return <div className="loading">Loading dashboard...</div>;
    }

    if (!data) {
        return <div className="error">Failed to load the dashboard data...</div>;
    }

    const chartData = {
        labels: monthlySales.map(item => item.monthName),
        datasets: [{
            label: 'Monthly Sales (₹)',
            data: monthlySales.map(item => item.totalSales),
            backgroundColor: '#20c997',
            borderWidth: 1,
        }]
    };

    const chartOptions = {
        plugins: {
            legend: {
                labels: {
                    color: '#f8f9fa'
                }
            }
        },
        scales: {
            x: {
                ticks: { color: '#dee2e6' },
                grid: { color: '#495057' }
            },
            y: {
                ticks: { color: '#dee2e6' },
                grid: { color: '#495057' }
            }
        },
        responsive: true,
        maintainAspectRatio: false
    };

    return (
        <div className="dashboard-wrapper">
            <div className="dashboard-container">
                {/* Stat Cards */}
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-icon">
                            <i className="bi bi-currency-rupee"></i>
                        </div>
                        <div className="stat-content">
                            <h3>Today's Sales</h3>
                            <p>₹{data.todaySales.toFixed(2)}</p>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon">
                            <i className="bi bi-cart-check"></i>
                        </div>
                        <div className="stat-content">
                            <h3>Today's Orders</h3>
                            <p>{data.todayOrderCount}</p>
                        </div>
                    </div>
                </div>

                   
                  <div className="chart-card">
                      <h3 className="chart-title">
                          Monthly Sales Overview
                      </h3>
                      <div className="chart-container" style={{ height: '400px' }}>
                          <Bar data={chartData} options={chartOptions} />
                      </div>
                  </div>

                 
                <div className="recent-orders-card">
                    <h3 className="recent-orders-title">
                        <i className="bi bi-clock-history"></i>
                        Recent Orders
                    </h3>
                    <div className="orders-table-container">
                        <table className="orders-table">
                            <thead>
                                <tr>
                                    <th>Order Id</th>
                                    <th>Customer</th>
                                    <th>Amount</th>
                                    <th>Payment</th>
                                    <th>Status</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.recentOrders.map((order) => (
                                    <tr key={order.orderId}>
                                        <td>{order.orderId.substring(0, 8)}...</td>
                                        <td>{order.customerName}</td>
                                        <td>₹{order.grandTotal.toFixed(2)}</td>
                                        <td>
                                            <span className={`payment-method ${order.paymentMethod.toLowerCase()}`}>
                                                {order.paymentMethod}
                                            </span>
                                        </td>
                                        <td>
                                            <span className={`status-badge ${order.paymentDetails.status.toLowerCase()}`}>
                                                {order.paymentDetails.status}
                                            </span>
                                        </td>
                                        <td>
                                            {new Date(order.createdAt).toLocaleDateString([], {
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            })}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
