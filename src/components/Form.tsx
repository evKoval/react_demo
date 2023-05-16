import React, {useState} from "react";
import {
    Button,
    Cascader,
    Checkbox,
    Form,
    Input,
    InputNumber,
    Radio,
    Switch,
    TreeSelect,
    Upload,
} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {RangePicker} from "./RangePicker";
import {SelectExample} from "./Select";


const normFile = (e: any) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

export const FormDemo: React.FC = () => {
    const [componentDisabled, setComponentDisabled] = useState<boolean>(true);

    return (
        <div style={{width: "800px", display: "block"}}>
            <h2>Antd Components
                <a className="external-link" href={"https://ant.design/components/overview"}>все компоненты</a>
            </h2>

            <Checkbox
                checked={componentDisabled}
                onChange={(e) => setComponentDisabled(e.target.checked)}
            >
                Form disabled
            </Checkbox>
            <Form
                labelCol={{span: 4}}
                wrapperCol={{span: 14}}
                layout="horizontal"
                disabled={componentDisabled}
                style={{maxWidth: 600}}
                validateTrigger={"onChange"}
            >
                <Form.Item label="Radio">
                    <Radio.Group>
                        <Radio value="apple"> Apple </Radio>
                        <Radio value="pear"> Pear </Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Input" required name={"input"}
                           rules={[{message: "Custom validation message here", required: true, type: "string"}]}>
                    <Input/>
                </Form.Item>
                <Form.Item label="Select">
                    <SelectExample/>
                </Form.Item>
                <Form.Item label="TreeSelect">
                    <TreeSelect
                        treeData={[
                            {title: 'Light', value: 'light', children: [{title: 'Bamboo', value: 'bamboo'}]},
                        ]}
                    />
                </Form.Item>
                <Form.Item label="Cascader">
                    <Cascader
                        options={[
                            {
                                value: 'zhejiang',
                                label: 'Zhejiang',
                                children: [
                                    {
                                        value: 'hangzhou',
                                        label: 'Hangzhou',
                                    },
                                ],
                            },
                        ]}
                    />
                </Form.Item>
                <Form.Item label="RangePicker">
                    <RangePicker/>
                </Form.Item>
                <Form.Item label="InputNumber">
                    <InputNumber/>
                </Form.Item>
                <Form.Item label="Switch" valuePropName="checked">
                    <Switch/>
                </Form.Item>
                <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
                    <Upload action="/upload.do" listType="picture-card">
                        <div>
                            <PlusOutlined/>
                            <div style={{marginTop: 8}}>Upload</div>
                        </div>
                    </Upload>
                </Form.Item>
                <Form.Item>
                    <Button htmlType={"submit"}>Submit</Button>
                </Form.Item>
            </Form>
        </div>
    );
};