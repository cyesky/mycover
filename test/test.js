/*
 * @Author: 沧海一声笑
 * @Date: 2020-11-15 11:27:21
 * @LastEditors: 沧海一声笑
 * @LastEditTime: 2020-12-06 17:26:58
 * @Description: 
 */
const chai=require('chai')
// import chai from 'chai'
const a=require('../src/index')
// import a from '../src/index'
console.log(a)
describe('ss',()=>{
    it('dd',()=>{
        chai.expect(a.a(1,2)).equals(3)
    })
})