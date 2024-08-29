import React from "react";
import "./styles.scss";
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  notification,
  Radio,
  Row,
  Typography,
} from "antd";
import dayjs from "dayjs";
import { ServicesList } from "../../pages/Services/Services.string";
import emailjs from "@emailjs/browser";

export default function FormService() {
  const [dateTime, setDateTime] = React.useState<dayjs.Dayjs | null>(null);
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);

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

  const sendEmail = async (values: any) => {
    setLoading(true);
    try {
      await emailjs.send("service_4nomeb7", "template_l8zw4im", values, {
        publicKey: "dLCeSbrDX5hdc30jP",
      });

      notification.success({
        message: "Email Sent",
        description: "Your email has been sent successfully!",
        placement: "topRight",
      });
      form.resetFields();
    } catch (error) {
      notification.error({
        message: "Email Failed",
        description: "There was an issue sending your email. Please try again.",
        placement: "topRight",
      });
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  const onFinish = (values: any) => {
    const formattedDateTime = dayjs(values.DatePicker).format(
      "HH:mm DD/MM/YYYY"
    );

    const formData: any = {
      ...values,
      DatePicker: formattedDateTime,
    };

    sendEmail(formData);
  };

  const { Title } = Typography;
  return (
    <div className="form-services">
      <Title style={{ fontFamily: '"Playfair Display", serif' }}>
        QUICK RESERVATION
      </Title>
      <Form form={form} layout="vertical" onFinish={onFinish}>
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
        <Row className="row">
          <Col span={12}>
            <Form.Item
              name="menu"
              label="Menu"
              rules={[
                {
                  required: true,
                  message: "Please select at least one menu item!",
                },
              ]}
            >
              <Checkbox.Group>
                {ServicesList.map((item) => (
                  <Checkbox
                    key={item.title}
                    value={item.title}
                    className="menu_item"
                  >
                    {item.title}
                  </Checkbox>
                ))}
              </Checkbox.Group>
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="duration" label={"Duration"}>
              <Radio.Group className="wrap_radio">
                <Radio value="30"> 30 mins </Radio>
                <Radio value="60"> 60 mins </Radio>
                <Radio value="90"> 90 mins </Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="Message" name="requirements">
          <Input placeholder="Other requirements ?" size="large" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            className="booking_btn"
            loading={loading}
          >
            BOOKING
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
