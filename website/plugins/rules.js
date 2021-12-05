import { extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules';

extend('required', {
	...required,
	message: 'Ce champ doit-être renseigné.'
});

extend('email', {
	...email,
	message: 'Ce champ doit correspondre à un email valide.'
})