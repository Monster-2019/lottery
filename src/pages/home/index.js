import React, { useState } from 'react';
import './home.scss'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

function Home () {
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');
    const [selectError, setSelectError] = useState('');
    const [resultText, setSesultText] = useState('');

    const onChange = (e) => {
        setSelectError('')
        setInputValue(e.target.value)
    }

    const startSelect = async () => {
        let selectL = inputValue.split(/\n/g).filter(item => item)
        let len = selectL.length
        if (!(len > 1)) {
            setSelectError('请输入多个选项')
        } else {
            setSelectError('')
            setSesultText('')
            let timer = setInterval(function () {
                let index = Math.floor(Math.random() * (len - 1))
                setResult(selectL[index])
            }, 100)

            setTimeout(function () {
                clearInterval(timer)
                setSesultText('最终结果为')
            }, 2000)
        }
    }

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-xl">随机选择器</h1>
            <Box width={1} my={4}>
                <TextField
                    id="outlined-multiline-static"
                    label="请输入选项，每个选项独占一行"
                    multiline
                    rows={10}
                    variant="outlined"
                    fullWidth
                    error={selectError !== ''}
                    helperText={selectError}
                    onChange={onChange}
                />
            </Box>
            <Button variant="contained" color="primary" onClick={startSelect}>
                开始随机选择
            </Button>
            <div className="result__box flex flex-col justify-center items-center mt-2">
                <span className="text-base">{resultText}</span>
                <span className="text-5xl font-bold">{result}</span>
            </div>
        </div>
    )
}

export default Home