import { MainLayout } from "components/MainLayout"
import { Table } from 'antd';
import { useState } from 'react';
import { Button } from "antd/es/radio";
import Excel from "components/Excel";

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];
const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: Math.floor(Math.random() * 60)+18,
        address: `London, Park Lane no. ${i}`,
    });
}

const Costumers = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
            {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: (changeableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return false;
                        }
                        return true;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
            {
                key: 'even',
                text: 'Select Even Row',
                onSelect: (changeableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return true;
                        }
                        return false;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
        ],
    };
    return (
        <MainLayout>
            <Excel
          fileName="export-user"
          data={[
            {
              columns: [
                {
                  title: "name",
                  dataIndex: "name",
                  width: 50,
                },
                {
                  title: "age",
                  dataIndex: "age",
                  width: 20,
                },
                {
                  title: "address",
                  dataIndex: "address",
                  width: 50,
                },
              ],
              data: data,
              tabName: "info",
            },
          
          ]}
        >
          <Button>Export </Button>
        </Excel>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />;
        </MainLayout>
    )
}
export default Costumers;