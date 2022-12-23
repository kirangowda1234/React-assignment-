import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import { Link } from "react-router-dom";

const PostCategories = ({ userId }) => {
    const users = useSelector(selectAllUsers)

    const Categories = users.find(user => user.id === userId);

    return <span>by {Categories ? <Link to={'/user/${userId}'}>{Categories.name}</Link> : 'Unknown categories'}</span>
}
export default PostCategories