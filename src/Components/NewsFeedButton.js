// import {FaEllipsis-h} from 'react-icons/fa';
const NewsFeedButton = ({ icon: Icon, className, onClick }) => {
  return (
    <>
      {/* <button className="new-btn"> */}
      {Icon && <Icon className={className} onClick={onClick} />}
      {/* </button> */}
    </>
  );
};

export default NewsFeedButton;
