function UserHomepage() {

const getAllPlans = () => {
  
  const storedToken = localStorage.getItem("authToken");
  axios
    .get(
    `${import.meta.env.VITE_API_URL}/api/plans`,
    { headers: { Authorization: `Bearer ${storedToken}` } }
  )
    .then((response) => setProjects(response.data))
    .catch((error) => console.log(error));
};


  return (
    <>
      <h1>Hello</h1>
    </>
  );
}
export default UserHomepage;
