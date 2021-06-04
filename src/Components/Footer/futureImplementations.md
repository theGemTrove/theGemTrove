Implement Newsletter
=====================
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/pro-solid-svg-icons';
<div className="newsletterPanel">
    <div className="newsletterPanel__heading">
  	    <FontAwesomeIcon icon={faNewspaper}  className="newsletterIcon"/>
  		<h2 className="newsletter__heading">Newsletter</h2>
  	</div>
  	<div className="newsletter__content">
  	    <p>Sign up to my newsletter and stay up to date to my progress!</p>
  		<form>
  		    <input className="input__subscribe" placeholder="ssnape@hogwarts.com" type="email" name="email"/>
  		</form>
  	</div>
</div>