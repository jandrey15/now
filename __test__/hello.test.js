import React from 'react'
import Hello from '../pages/index'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('Añadiendo pruebas a React', () => {
  test('Comprobamos el texto que recibe por prop', () => {
    const data = { name: 'John serrano'}
    const wrapper = mount(
      <Hello name={data.name} />
    )
    const h3 = wrapper.find('h3')
    expect(h3.text()).toBe(`Hello world! - ${data.name}`)
  })
})
