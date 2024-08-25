import React from "react";
import "./styles.scss";
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Radio,
  Typography,
} from "antd";
import dayjs from "dayjs";
import { ServicesList } from "../../pages/Services/Services.string";

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

  const onFinish = (values: any) => {
    try {
      const formattedDateTime = dayjs(values.DatePicker).format(
        "HH:mm DD/MM/YYYY"
      );
      console.log("Form Data: ", formattedDateTime);
    } catch (error) {
      console.log("bug");
    }
  };

  const { Title } = Typography;
  return (
    <div className="form-services">
      <Title style={{ fontFamily: '"Playfair Display", serif' }}>
        QUICK RESERVATION
      </Title>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Name"
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
          <Input placeholder="Full name" size="large" />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            { required: true, message: "Please input your phone number!" },
            {
              pattern: /^[0-9]{10}$/,
              message: "Phone number must be 10 digits!",
            },
          ]}
        >
          <Input placeholder="Number phone" size="large" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "The input is not valid E-mail!" },
          ]}
        >
          <Input placeholder="Email contact" size="large" />
        </Form.Item>

        <Form.Item
          label="Number of People *"
          name="people"
          rules={[
            { required: true, message: "Please input the number of people!" },
            {
              pattern: /^[0-9]{1,2}$/,
              message: "Number of people must be a valid number!",
            },
          ]}
        >
          <Input placeholder="How many people?" size="large" />
        </Form.Item>

        <Form.Item
          label="Date/Time Checkin "
          name="DatePicker"
          rules={[
            { required: true, message: "Please select a date and time!" },
          ]}
        >
          <DatePicker
            style={{ width: "100%" }}
            showTime
            format="YYYY-MM-DD HH:mm"
            onChange={handleChange}
            value={dateTime}
            disabledDate={disabledDate}
            disabledTime={disabledTime}
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="checkbox"
          valuePropName="checked"
          className="form-menu"
        >
          {ServicesList.map((item) => (
            <Checkbox
              key={item.title}
              value={item.title}
              className="form-menu-item"
            >
              {item.title}
            </Checkbox>
          ))}
        </Form.Item>

        <Form.Item name="duration">
          <Radio.Group>
            <Radio value="30"> 30 mins </Radio>
            <Radio value="60"> 60 mins </Radio>
            <Radio value="90"> 90 mins </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Message" name="requirements">
          <Input placeholder="Other requirements ?" size="large" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button type="primary" htmlType="submit" className="blinking-button">
            BOOKING
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
