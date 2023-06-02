import { MainLayout } from "components/MainLayout"

import { Table } from 'antd';
import { useState } from 'react';
import { Button } from "antd/es/radio";

const columns = [
    {
        title: 'Products',
        dataIndex: 'name',
    },
    {
        title: 'Quantity',
        dataIndex: 'age',
    },
    
];
const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Product ${i}`,
        age: Math.floor(Math.random() * 30),
        
    });
}
const Product = () => {
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
            <Button type="primary" htmlType="submit">
                Add Product
              </Button>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />;
        </MainLayout>
    )
}
export default Product;