import React from 'react';
import { useEffect, useState } from 'react';
import { IonItem, IonLabel, IonList, IonText } from '@ionic/react';
import { supabase } from '../supabaseClient';

interface TestDb {
  id: number;
  name: string;
  description: string;
  inserted_at: string;
}

const TestDb: React.FC = () => {
  const [testnames, setTestnames] = useState<TestDb[]>([]);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    const loadData = async () => {
    const { data, error } = await supabase.from('testtbl').select('*');
    console.log(data, error);
    if (error) {
        console.error('Error loading data:', error);
      } else {
        setTestnames(data || []);
      }
    };
    loadData();
  }, []);

    const toggleExpand = (id: number) => {
      setExpandedId(curr => (curr === id ? null : id));
    };

  return (
    <IonList>
       {testnames.map(testname => {
          return (
            <div key={testname.id}>
              <IonItem button detail onClick={() => toggleExpand(testname.id)}>
                <IonLabel>{testname.name}</IonLabel>
              </IonItem>

              {expandedId === testname.id && (
                <div style={{ padding: '10px 16px' }}>
                  <IonText color="medium">
                    <p><strong>Description:</strong> {testname.description}</p>
                    <p><strong>Inserted at</strong> {testname.inserted_at}</p>
                  </IonText>
                </div>
            )}
          </div>
          );
        })}
    </IonList>
  );
};

export default TestDb;
