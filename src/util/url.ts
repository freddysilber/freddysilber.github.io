interface Url {
	name?: string;
	url: string;
}

type Urls = Record<string, Url>;

export const URLS: Urls = {
	cloudCoach: {
		name: 'Cloud Coach',
		url: 'https://cloudcoach.com/'
	},
	fraser: {
		name: 'Fraser',
		url: 'https://frasercolorado.com/'
	},
	winterParkResort: {
		name: 'Winter Park Resort',
		url: 'https://www.winterparkresort.com/'
	},
	middleParkHighSchool: {
		name: 'Middle Park High School',
		url: 'http://mphs.egsd.org/'
	},
	salesforce: {
		name: 'Salesforce',
		url: 'https://www.salesforce.com/'
	},
	flatironSchool: {
		name: 'Flatiron School',
		url: 'https://flatironschool.com/'
	},
	github: {
		name: 'GitHub',
		url: 'https://github.com/freddysilber'
	},
	instagram: {
		url: 'https://www.instagram.com/freddy.silber/'
	},
	linkedIn: {
		url: 'https://www.linkedin.com/in/freddysilber/'
	},
	twitter: {
		url: 'https://twitter.com/freddysilber'
	},
	blog: {
		url: 'https://freddysilber.github.io/blog/'
	},
	youtube: {
		url: 'https://www.youtube.com/channel/UCzzigkFUQprDQ3DBFiSg75w'
	}
};

export function getGithubRepo(repoName: string) {
	return `${URLS.github.url}/${repoName}`
}
/**
 * This class handles email config external routing to outside of my site
 */
export class Email {
	private static _email: string = `freddy.silber@gmail.com`;
	private static _subject: string = `Hey Freddy...`;
	private static _body: string = `Ask me anything, I'd love to hear from you!`;

	public static getEmailHandler(): string {
		return `mailto: ${this._email}?subject=${this._subject}&body=${this._body}`;
	}
}