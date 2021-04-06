import React, { useState } from "react";
import { Form, Input, Button, Radio, Select } from "antd";

const AddWalletForm = () => {
  const [form] = Form.useForm();

  const formLayout = "inline";

  return (
    <div style={{ padding: 5 }}>
      <Form
        layout={formLayout}
        form={form}
        initialValues={{
          wallet: "Ethereum",
        }}
      >
        <Form.Item label="Add a wallet for tracking:" name="wallet">
          <Radio.Group name="coinPicker">
            <Radio.Button value="Ethereum">Ethereum</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Select label="Pool:" placeholder="Select your pool" allowClear>
          <Select.Option value="Ethermine">Ethermine</Select.Option>
        </Select>
        <Form.Item label="Address:">
          <Input placeholder="Past address here" />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddWalletForm;
