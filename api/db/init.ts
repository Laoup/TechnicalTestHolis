import User from '@models/user.model'
import Score from '@models/score.model'

const dbInit = async () => {
	await User.sync()
	await Score.sync()
}

export default dbInit