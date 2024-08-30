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
import { useTranslation } from "react-i18next";

export default function FormService() {
  const [dateTime, setDateTime] = React.useState<dayjs.Dayjs | null>(null);
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);
  const { t } = useTranslation();

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
    if (loading) return;

    setLoading(true);
    try {
      await emailjs.send("service_4nomeb7", "template_l8zw4im", values, {
        publicKey: "dLCeSbrDX5hdc30jP",
      });

      notification.success({
        message: t("home.formService.message.success"),
        description: t("home.formService.description.success"),
        placement: "topRight",
      });
      form.resetFields();
    } catch (error) {
      notification.error({
        message: t("home.formService.message.error"),
        description: t("Sorry, please try again or contact Zenith Spa admin."),
        placement: "topRight",
      });
      console.log("error", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
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
      <Title
        style={{ fontFamily: '"Playfair Display", serif' }}
        className="form-services-title"
      >
        {t("home.formService.title")}
      </Title>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label={t("home.formService.name")}
          name="name"
          rules={[
            { required: true, message: t("home.formService.name.message") },
            {
              pattern: /^[\p{L}\s.,!?'-]+$/u,
              message: t("home.formService.name.massage2"),
            },
          ]}
        >
          <Input
            placeholder={t("home.formService.name.placeholder")}
            size="large"
          />
        </Form.Item>

        <Form.Item
          label={t("home.formService.phone")}
          name="phone"
          rules={[
            { required: true, message: t("home.formService.phone.message") },
          ]}
        >
          <Input
            placeholder={t("home.formService.phone.placeholder")}
            size="large"
          />
        </Form.Item>

        <Form.Item
          label={t("home.formService.email")}
          name="email"
          rules={[
            { required: true, message: t("home.formService.email.message") },
            { type: "email", message: t("home.formService.email.massage2") },
          ]}
        >
          <Input
            placeholder={t("home.formService.email.placeholder")}
            size="large"
          />
        </Form.Item>

        <Form.Item
          label={t("home.formService.people")}
          name="people"
          rules={[
            { required: true, message: t("home.formService.people.message") },
            {
              pattern: /^[0-9]{1,2}$/,
              message: t("home.formService.people.massage2"),
            },
          ]}
        >
          <Input
            placeholder={t("home.formService.people.placeholder")}
            size="large"
          />
        </Form.Item>

        <Form.Item
          label={t("home.formService.datePicker")}
          name="DatePicker"
          rules={[
            {
              required: true,
              message: t("home.formService.datePicker.message"),
            },
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
              name={t("home.formService.menu")}
              label="Menu"
              rules={[
                {
                  required: true,
                  message: t("home.formService.menu.message"),
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
            <Form.Item name="duration" label={t("home.formService.duration")}>
              <Radio.Group className="wrap_radio">
                <Radio value="30"> 30 mins </Radio>
                <Radio value="60"> 60 mins </Radio>
                <Radio value="120"> 120 mins </Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="Message" name={t("home.formService.requirements")}>
          <Input
            placeholder={t("home.formService.requirements.placeholder")}
            size="large"
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            className="booking_btn"
            loading={loading}
          >
            {t("home.formService.button")}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
