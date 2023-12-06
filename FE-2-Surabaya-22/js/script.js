const API_BASE_URL = 'http://localhost:3000';

async function fetchConsument() {
  try{
    const response = await fetch('${API_BASE_URL}/consument')
    const consument = await response.json();
  } catch (err){
    console.error(err);
  }
}