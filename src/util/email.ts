// import React from 'react';

/**
 * This class handles email config external routing to outside of my site
 */
export class Email {
	private static _email: string = `freddy.silber@gmail.com`;
	private static _subject: string = `Hey Freddy...`;
	private static _body: string = `Hello, I'm...`;

	public static getEmailHandler(): string {
		return `mailto: ${this._email}?subject=${this._subject}&body=${this._body}`;
	}

	public static address(): string {
		return this._email;
	}
}

// /**
//  * Renders an anchor tag with a 'mailto' link to set up an email
//  */
// export function mailTo(label?: string): JSX.Element {
// 	return <a href={Email.getEmailHandler()} target="_blank">{label || 'freddy.silber@gmail.com'}</a>;
// }