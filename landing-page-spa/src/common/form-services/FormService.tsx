import React from "react";
import "./styles.scss";
import { Button, Checkbox, DatePicker, Form, Input, Radio } from "antd";
import dayjs from "dayjs";

export default function FormService() {
  const [dateTime, setDateTime] = React.useState<dayjs.Dayjs | null>(null);

  const handleChange = (value: dayjs.Dayjs | null) => {
    setDateTime(value);
  };

  const disabledDate = (current: dayjs.Dayjs) => {
    return current && current < dayjs().startOf("day");
  };

  const disabledTime = () => ({
    disabledHours: () => {
      const currentHour = dayjs().hour();
      return Array.from({ length: currentHour }).map((_, index) => index);
    },
    disabledMinutes: (hour: number) => {
      const currentMinute = dayjs().minute();
      return hour === dayjs().hour()
        ? Array.from({ length: currentMinute }).map((_, index) => index)
        : [];
    },
  });

  // Hàm xử lý khi form được submit
  const onFinish = (values: any) => {
    const formattedDateTime = dayjs(values.DatePicker).format(
      "HH:mm DD/MM/YYYY"
    );
    console.log("Form Data: ", formattedDateTime);
  };

  return (
    <Form layout="horizontal" onFinish={onFinish}>
      <Form.Item
        name="name"
        rules={[
          { required: true, message: "Please input your name!" },
          {
            pattern: /^[\p{L}\s.,!?'-]+$/u,
            message:
              "Name must contain only letters (including Vietnamese letters), spaces, and valid punctuation!",
          },
        ]}
      >
        <Input placeholder="Full name" />
      </Form.Item>

      <Form.Item
        name="phone"
        rules={[
          { required: true, message: "Please input your phone number!" },
          {
            pattern: /^[0-9]{10}$/,
            message: "Phone number must be 10 digits!",
          },
        ]}
      >
        <Input placeholder="Number phone" />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[
          { required: true, message: "Please input your email!" },
          { type: "email", message: "The input is not valid E-mail!" },
        ]}
      >
        <Input placeholder="Email contact" />
      </Form.Item>

      <Form.Item
        name="people"
        rules={[
          { required: true, message: "Please input the number of people!" },
          {
            pattern: /^[0-9]{1,2}$/,
            message: "Number of people must be a valid number!",
          },
        ]}
      >
        <Input placeholder="How many people?" />
      </Form.Item>

      <Form.Item
        name="DatePicker"
        rules={[{ required: true, message: "Please select a date and time!" }]}
      >
        <DatePicker
          style={{ width: "100%" }}
          showTime
          format="YYYY-MM-DD HH:mm"
          onChange={handleChange}
          value={dateTime}
          disabledDate={disabledDate}
          disabledTime={disabledTime}
        />
      </Form.Item>

      <Form.Item name="checkbox" valuePropName="checked">
        <Checkbox>Checkbox</Checkbox>
      </Form.Item>

      <Form.Item name="duration">
        <Radio.Group>
          <Radio value="30"> 30 mins </Radio>
          <Radio value="60"> 60 mins </Radio>
          <Radio value="90"> 90 mins </Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item name="requirements">
        <Input placeholder="Other requirements ?" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" htmlType="submit">
          BOOKING
        </Button>
      </Form.Item>
    </Form>
  );
}
