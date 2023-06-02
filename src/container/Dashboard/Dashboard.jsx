import { Button, Col, Row, Statistic } from 'antd';
import { Chart2 } from 'components/Chart2/Chart2';
import { Chart1} from'components/Chart1/Chart1'

import { MainLayout } from "components/MainLayout"

const Dashboard = () => {
    return (
        <MainLayout>
            <div>
                <h1 style={{fontSize:"35px"}}>statistical</h1>
                <Row gutter={16}>
                    <Col span={12}>
                        <Statistic title="number of users" value={112893} />
                    </Col>
                    <Col span={12}>
                        <Statistic title=" the number of products" value={1153} />
                        <Button
                            style={{
                                marginTop: 16,
                            }}
                            type="primary"
                        >
                            Recharge
                        </Button>
                    </Col>
                    <Col span={12}>
                        <Statistic title="Users" value={112893} loading />
                    </Col>
                    <Col span={12}>
                        <Statistic title="Oders" value={1120} />
                    </Col>
                </Row>
            </div>
            <Chart1></Chart1>
            <Chart2></Chart2>
        </MainLayout>
    )
}
export default Dashboard;