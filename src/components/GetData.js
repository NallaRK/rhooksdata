import useFetchData from '../utils/useFetchData'
function GetData(props) {
    const data=useFetchData('https://jsonplaceholder.typicode.com/users?'+props.url)
    return props.render(data)
}
export default GetData