import React from 'react'

type Props = {
  foo: string;
  bar: string;
}

const Hi: React.FC = () => <p>hi</p>

export const Hello: React.FC<Props> = ({foo, bar}) =>
  <Hi>{foo} {bar}</Hi>;

