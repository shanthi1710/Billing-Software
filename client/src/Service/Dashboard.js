import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1.0";

export const fetchDashboardData = async () => {
    return await axios.get(`${BASE_URL}/dashboard`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    });
}

export const fetchMonthlySalesData = async () => {
    return await axios.get(`${BASE_URL}/dashboard/monthly-sales`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    });
}
