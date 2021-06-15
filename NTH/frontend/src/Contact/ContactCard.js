const ContactCard = (props) => {
  return (
    <div className="contactus-card">
      <img src={props.image} width="210px" />
      <div className='card-name'>
        <h4>{props.name}</h4>
        <h5>
          <a href="">
          <i class="fab fa-linkedin"></i>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="">
            <i class="fas fa-phone-alt"></i>
          </a>
        </h5>
      </div>
    </div>
  );
};

export default ContactCard;
