import React, { Component } from 'react'

export default class FormCreateProduct extends Component {

    state = {
        values: {
            id: '',
            name: '',
            price: '',
            productType: 'phone',
            image: '',
            description: '',
        },
        errors: {
            id: '',
            name: '',
            price: '',
            image: '',
            description: '',
        },
        valid: false


    }

    checkValid = () => {
        //form hợp lệ khi values !== '' và error = ''
        //Lấy ra object value và error để duyệt điều kiện hợp lệ
        let { values, errors } = this.state;
        for (let key in errors) {
            if (errors[key] !== '' || values[key] == '') {
                return false;
            }
        }
        return true;
    }

    handleInputChange = (e) => {
        //Lấy ra id và value của thẻ đang oninput
        //properties: value,id,style,innerhtml ... 
        let { value, id, regex } = e.target; //id: id, name,price ,... tuỳ theo trường đang oninput là gì

        //attribute: là thuộc tính tự mình thêm vào thẻ
        let dataAttrRegex = e.target.getAttribute('data-regex');
        let type = e.target.getAttribute('data-type');
        console.log('dataRegex', dataAttrRegex);
        //Xử lý value
        let newValues = this.state.values;
        newValues[id] = value;
        //Vử lý errors
        let newErrors = this.state.errors;
        let messError = '';
        if (value.trim() == '') {
            messError = id + ' cannot be blank';
        } else {
            //Cách 1
            // if(dataAttrRegex){
            //     //string: '/^\d+$/'
            //     //regex: /^\d+$/.test()
            //     let regex = new RegExp(dataAttrRegex);
            //     if(!regex.test(value)){
            //         messError = id + ' is invalid';
            //     }
            // }
            //Cách 2:
            if (type === 'number') {
                let regexNumber = /^\d+$/;
                if (!regexNumber.test(value)) {
                    messError = id + ' is invalid';
                }
            }
        }
        newErrors[id] = messError;


        //Cập nhật state
        this.setState({
            values: newValues,
            errors: newErrors
        }, () => {
            let valid = this.checkValid();
            this.setState({
                valid: valid
            })

        })

    }


    handleSubmit = (e) => {
        e.preventDefault(); //Chặn sự kiện reload browser
        console.log('abc');
        if(!this.checkValid()){
            return;//Dừng hàm không submit
        }
    }
    render() {
        return (
            <form className='container' onSubmit={this.handleSubmit}>
                <h3>Create product</h3>
                <div className='card'>
                    <h3 className='card-header'>Product info</h3>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='form-group'>
                                    <p>id</p>
                                    <input className='form-control' id="id" name="id" onInput={this.handleInputChange} />
                                    {this.state.errors.id !== '' && <div className='alert alert-danger mt-2'>{this.state.errors.id}</div>}
                                </div>
                                <div className='form-group'>
                                    <p>name</p>
                                    <input className='form-control' id="name" name="name" onInput={this.handleInputChange} />
                                    {this.state.errors.name !== '' ? <div className='alert alert-danger'>{this.state.errors.name}</div> : ''}
                                </div>
                                <div className='form-group'>
                                    <p>price</p>
                                    <input data-type="number" data-regex="^\d+$" className='form-control' id="price" name="price" onInput={this.handleInputChange} />
                                    <div className='text text-danger'>{this.state.errors.price}</div>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='form-group'>
                                    <p>image</p>
                                    <input className='form-control' id="image" name="image" onInput={this.handleInputChange} />
                                    <div className='text text-danger'>{this.state.errors.image}</div>
                                </div>
                                <div className='form-group'>
                                    <p>productType</p>
                                    <select className='form-control' id="productType" onInput={this.handleInputChange}>
                                        <option value={'phone'}>phone</option>
                                        <option value={'tablet'}>tablet</option>
                                        <option value={'laptop'}>laptop</option>
                                    </select>
                                </div>
                                <div className='form-group'>
                                    <p>description</p>
                                    <input className='form-control' id="description" name="description" onInput={this.handleInputChange} />
                                    <div className='text text-danger'>{this.state.errors.description}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-footer'>
                        <button type='submit' className='btn btn-success m-2' disabled={!this.state.valid}>Create</button>
                    </div>
                </div>
            </form>
        )
    }
}




// function callback (param) {

// }


// callback('abc'); //truyền


// function main(callback) {
//     callback('xyz');
// }

// main((param) => {
//     console.log(param)
// })