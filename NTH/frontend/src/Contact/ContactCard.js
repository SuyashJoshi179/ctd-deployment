const ContactCard = (props) => {
  return (
    <div className="contactus-card">
      <img src={props.image} width="210px" />
      <div className='card-name'>
        <h4>{props.name}</h4>
        <h5>
          
          {/* <br /> */}
          {/* &nbsp;&nbsp;&nbsp;&nbsp; */}
          <a href="tel:+918329049174">
            <i class="fas fa-phone-alt"></i> +91 83290 49174
          </a>
          <br />
          <a href="">
          <i class="fab fa-linkedin "></i>
          </a>
        </h5>
      </div>
    </div>
  );
};

export default ContactCard;
