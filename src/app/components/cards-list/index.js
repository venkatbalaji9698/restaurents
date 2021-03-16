import React from 'react';
import { Card, Rate } from 'antd';
import { ShopFilled, FlagTwoTone } from '@ant-design/icons';

import './index.scss';

const CardsList = ({ restaurantsList }) => {
    return restaurantsList.map(item => {
        const year = item["Top Ten"].slice(0, item["Top Ten"].indexOf('#') - 1);
        const rankings = item["Top Ten"].slice(item["Top Ten"].indexOf('#'), item["Top Ten"].length);
        return (
            <Card
                size="small"
                title={
                    <div>
                        <ShopFilled style={{ color: "#008C38" }} />
                        <span className="cards-list_card-title">{item.Brand}</span>
                    </div>
                }
                extra={
                    <div style={{ fontWeight: 400, fontSize: '16px' }}>
                        <span>{year}</span>{' '}
                        <span style={{ color: "#ff5f3b" }}>{rankings}</span>
                    </div>
                }
                style={{ width: '100%' }}
                className="cards-list"
            >
                <p>
                    <b>Variety:</b> <span>{item.Variety}</span>
                </p>
                <p>
                    <b>Style:</b> <span>{item.Style}</span>
                </p>
                <p>
                    <FlagTwoTone style={{ color: "rgb(0, 140, 56)" }} /> <span>{item.Country}</span>
                </p>
                <p>
                    <Rate value={item.Stars} />
                </p>
            </Card>
        )
    });
}

export default CardsList;
