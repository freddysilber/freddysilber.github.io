import React from 'react'

export interface HelloProps { compiler: string; framework: string; }

const Header = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;

export default Header